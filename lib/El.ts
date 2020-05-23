import { IProps } from "./interface";
import fixAttr from "./fixAttr";
import fixChildren from "./fixChildren";

type IElementCallback = (ele: HTMLElement) => unknown;
type Children = (HTMLElement | string | number | undefined | boolean)[];
type RenderChildren = () => Children;

declare function IEl<T extends Element>(
  tagName: T,
  props?: IElementCallback | IProps | string | Children,
  children?: RenderChildren | Children
): T;
declare function IEl<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  props?: IElementCallback | IProps | string | Children,
  children?: RenderChildren | Children
): HTMLElementTagNameMap[K];

interface ElePrototypeOptions {
  // state: typeof state;
}

const ignoreProp = {
  $bind: 1,
  $append: 1,
  $memo: 1,
  $ref: 1,
};

const El: typeof IEl & ElePrototypeOptions = (
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
            (ele as any)[addKey] = (e: any) => {
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

      // 实现 bind state 逻辑
      const $bind = props["$bind"];
      if ($bind) {
        let appendCache: any;
        let memoCache: any;
        const $append = props["$append"];
        if (typeof $append === "function") {
          appendCache = $append();
        }
        const $memo = props["$memo"];
        if (typeof $memo === "function") {
          memoCache = $memo();
        }
        $bind.forEach((ob: any) => {
          ob.subscribeElement(() => {
            if ($append) {
              let nextCache = $append();
              for (let i = 0; i < nextCache.length; i++) {
                if (nextCache[i] !== appendCache[i]) {
                  fixChildren(ele, children);
                  break;
                }
              }
              appendCache = nextCache;
            }
            if ($memo) {
              let nextCache = $memo();
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
      const _useRef = props["$ref"];

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

export default El;
