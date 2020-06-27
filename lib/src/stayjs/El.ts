import { IProps } from "./interface";
import fixAttr from "./fixAttr";

type IElementCallback = (ele: HTMLElement) => unknown;
type Children = (
  | HTMLElement
  | string
  | number
  | undefined
  | boolean
  | Function
)[];

declare function IEl<T extends Element>(
  tagName: T,
  props?: IElementCallback | IProps | string | Children,
  children?: Children
): T;
declare function IEl<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  props?: IElementCallback | IProps | string | Children,
  children?: Children
): HTMLElementTagNameMap[K];

interface ElePrototypeOptions {
  // state: typeof state;
}

const ignoreProp = {
  state: 1,
  memo: 1,
  ref: 1,
};

const El: typeof IEl & ElePrototypeOptions = function (
  tagName: any,
  props: any,
  children: any
) {
  let ele: HTMLElement = tagName;
  if (typeof tagName === "string") {
    ele = document.createElement(tagName);
  }

  let fns: any;
  let needReChilds: any;
  let state = props && props["state"];
  let onDestory: Function;
  if (state) {
    onDestory = function () {
      fns = null;
      needReChilds = null;
      onDestory = null as any;
    };
  }
  const onUpdate = function () {
    if (fns) {
      Object.keys(fns).forEach(function (k) {
        fns[k]();
      });
    }
    if (needReChilds) {
      Object.keys(needReChilds).forEach(function (k) {
        const [run, el] = needReChilds[k];
        if (el.parentElement) {
          const sub = run() || document.createElement("span");
          el.parentElement.replaceChild(sub, el);
          needReChilds[k] = [run, sub];
        }
      });
    }
  };

  let endChilds = [];
  let isArrayProps = Array.isArray(props);
  if (props && isArrayProps) {
    children = props;
  }

  if (children && children.length) {
    for (let i = 0; i < children.length; i++) {
      if (children[i]) {
        if (children[i].__token) {
          endChilds.push(
            El(children[i].tag, children[i].props, children[i].children)
          );
        } else if (typeof children[i] === "function") {
          const sub = children[i]() || document.createElement("span");
          if (props && props.state) {
            if (!needReChilds) {
              needReChilds = {};
            }
            needReChilds[i] = [children[i], sub];
          }
          endChilds.push(sub);
        } else {
          endChilds.push(children[i]);
        }
      }
    }
  }

  if (props) {
    if (typeof props === "string") {
      ele.className = props;
    } else if (typeof props === "function") {
      props(ele);
    } else if (!isArrayProps) {
      // 实现其他props赋值和观察
      Object.keys(props).forEach(function (k) {
        if ((ignoreProp as any)[k]) {
          return;
        }
        const obj = props[k];
        if (typeof obj === "function") {
          if (!fns) {
            fns = {};
          }
          if (k.indexOf("on") === 0) {
            (ele as any)[k] = obj;
          } else if (k.indexOf("listen") === 0) {
            const addKey = k.replace("listen", "on");
            const oldEvent = (ele as any)[addKey];
            (ele as any)[addKey] = function (e: any) {
              if (oldEvent) {
                oldEvent(e);
              }
              obj(e);
            };
          } else {
            if (k[0] === "-") {
              const attrKey = k.replace("-", "");
              fns[k] = function () {
                fixAttr(attrKey, obj());
              };
            } else if (k === "cssText") {
              fns[k] = function () {
                ele.style.cssText = obj();
              };
            } else if (k === "style") {
              fns[k] = function () {
                const styleList = obj();
                const styles = Object.keys(styleList);
                styles.forEach(function (styKey) {
                  (ele as any).style[styKey] = styleList[styKey];
                });
              };
            } else {
              fns[k] = function () {
                (ele as any)[k] = obj();
              };
            }
          }
        } else {
          if (k === "cssText") {
            ele.style.cssText = obj;
          } else if (k === "style") {
            const styles = Object.keys(obj);
            styles.forEach(function (styKey) {
              (ele as any).style[styKey] = obj[styKey];
            });
          } else {
            (ele as any)[k] = obj;
          }
        }
      });

      // 实现 bind state 逻辑
      if (state) {
        if (!Array.isArray(state)) {
          state = [state];
        }
        let memoCache: any;
        const $memo = props["$memo"];
        if (typeof $memo === "function") {
          memoCache = $memo();
        }
        state.forEach(function (ob: any) {
          ob.__subscribeElement(function () {
            if ($memo) {
              let nextCache = $memo();
              for (let i = 0; i < nextCache.length; i++) {
                if (nextCache[i] !== memoCache[i]) {
                  onUpdate();

                  break;
                }
              }
              memoCache = nextCache;
            } else {
              onUpdate();
            }
          }, onDestory)(ele);
        });
      }
      const _useRef = props["$ref"];

      if (typeof _useRef === "function") {
        _useRef(ele);
      } else if (_useRef) {
        _useRef.forEach(function (fn: any) {
          fn(ele);
        });
      }
    }
  }
  if (endChilds.length) {
    ele.append(...endChilds);
  }

  onUpdate();

  return ele;
};

export default El;
