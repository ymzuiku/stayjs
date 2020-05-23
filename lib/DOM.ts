import { IProps } from "./interface";
import fixAttr from "./fixAttr";
import fixChildren from "./fixChildren";

type IElementCallback = (ele: HTMLElement) => unknown;
type Children = (HTMLElement | string | number | undefined | boolean)[];
type RenderChildren = () => Children;

declare function IStay<T extends Element>(
  tagName: T,
  props?: IElementCallback | IProps | string | Children,
  children?: RenderChildren | Children
): T;
declare function IStay<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  props?: IElementCallback | IProps | string | Children,
  children?: RenderChildren | Children
): HTMLElementTagNameMap[K];

interface ElePrototypeOptions {
  // state: typeof state;
}

const ignoreProp = {
  useState: 1,
  useChildren: 1,
  useMemo: 1,
  useRef: 1,
};

const DOM: typeof IStay & ElePrototypeOptions = (
  tagName: any,
  props: any,
  children: any
) => {
  let ele: HTMLElement = tagName;
  if (typeof tagName === "string") {
    ele = document.createElement(tagName);
  }

  const fns = new Map();

  if (props) {
    if (typeof props === "string") {
      ele.className = props;
    } else if (typeof props === "function") {
      props(ele);
    } else if (Object.prototype.toString.call(props) === "[object Array]") {
      children = props;
    } else {
      // 实现其他props赋值和观察
      Object.keys(props).forEach((k) => {
        if ((ignoreProp as any)[k]) {
          return;
        }
        const obj = props[k];
        if (typeof obj === "function") {
          if (k.indexOf("on") === 0) {
            (ele as any)[k] = obj;
          } else if (k.indexOf("add") === 0) {
            const addKey = k.replace("add", "on");
            const oldEvent = (ele as any)[addKey];
            (ele as any)[k] = (e: any) => {
              if (oldEvent) {
                oldEvent(e);
              }
              obj(e);
            };
          } else {
            if (k[0] === "-") {
              const attrKey = k.replace("-", "");
              fns.set(k, () => {
                fixAttr(attrKey, obj());
              });
            } else if (k === "style") {
              fns.set(k, () => {
                const styleList = obj();
                const styles = Object.keys(styleList);
                styles.forEach((styKey) => {
                  (ele as any).style[styKey] = styleList[styKey];
                });
              });
            } else {
              fns.set(k, () => {
                (ele as any)[k] = obj();
              });
            }
          }
        } else {
          if (k === "style") {
            const styles = Object.keys(obj);
            styles.forEach((styKey) => {
              (ele as any).style[styKey] = obj[styKey];
            });
          } else {
            (ele as any)[k] = obj;
          }
        }
      });

      // 实现 useOb逻辑
      const _useState = props["useState"];
      if (_useState) {
        let appendCache: any;
        let memoCache: any;
        const _useChildren = props["useChildren"];
        if (typeof _useChildren === "function") {
          appendCache = _useChildren();
        }
        const _useMemo = props["useMemo"];
        if (typeof _useMemo === "function") {
          memoCache = _useMemo();
        }
        _useState.forEach((ob: any) => {
          ob.subscribeElement(() => {
            if (_useChildren) {
              let nextCache = _useChildren();
              for (let i = 0; i < nextCache.length; i++) {
                if (nextCache[i] !== appendCache[i]) {
                  fixChildren(ele, children);
                  break;
                }
              }
              appendCache = nextCache;
            }
            if (_useMemo) {
              let nextCache = _useMemo();
              for (let i = 0; i < nextCache.length; i++) {
                if (nextCache[i] !== memoCache[i]) {
                  fns.forEach((fn) => fn());
                  break;
                }
              }
              memoCache = nextCache;
            } else {
              fns.forEach((fn) => fn());
            }
          })(ele);
        });
      }
      const _useRef = props["useRef"];

      if (typeof _useRef === "function") {
        _useRef(ele);
      } else if (_useRef) {
        _useRef.forEach((fn: any) => fn(ele));
      }
    }
  }

  if (typeof children === "function") {
    ele.append(...children().filter(Boolean));
  } else if (children) {
    ele.append(...children.filter(Boolean));
  }

  fns.forEach((fn) => fn());

  return ele;
};

export default DOM;
