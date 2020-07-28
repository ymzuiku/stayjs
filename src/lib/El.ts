import { IProps } from "./interface";
import fixAttr from "./fixAttr";

type IElementCallback = (ele: HTMLElement) => unknown;
type ChildrenList = (HTMLElement | string | number | undefined | boolean | Function)[];
type ChildrenFn = () => HTMLElement | string | number | undefined | boolean | Function;
type Children = ChildrenList | ChildrenFn;

export function isElement(obj: any) {
  return Object.prototype.toString.call(obj).indexOf("lement") > 0;
}

declare function IEl<T extends Element>(
  tagName: T,
  props?: IElementCallback | IProps | string | Children,
  children?: Children
): T;

declare function IEl<T extends Element>(
  tagName: Function,
  props?: IElementCallback | IProps | string | Children,
  children?: Children
): T;

declare function IEl<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  props?: IElementCallback | IProps | string | Children,
  children?: Children
): HTMLElementTagNameMap[K];

// interface ElePrototypeOptions {
//   // state: typeof state;
// }

const ignoreProp = {
  state: 1,
  memo: 1,
  ref: 1,
  len: 1,
};

const El: typeof IEl = function (tagName: any, props: any, children: any) {
  if (props && props["by"]) {
    tagName = props["by"];
    delete props["by"];
  }
  let ele: HTMLElement = tagName;
  if (typeof tagName === "string") {
    ele = document.createElement(tagName);
  } else if (typeof tagName === "function") {
    if (props && children) {
      props.children = children;
    }
    return tagName(props);
  }

  let fns = {} as any;
  let state = props && props["state"];
  let onDestory: Function;
  if (state) {
    onDestory = function () {
      fns = null;
      onDestory = null as any;
    };
  }
  const onUpdate = function () {
    if (fns) {
      Object.keys(fns).forEach(function (k) {
        fns[k]();
      });
    }
  };

  const isArrayProps = Array.isArray(props);
  if (props && isArrayProps) {
    children = props;
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
            if (k === "cssText") {
              fns[k] = function () {
                ele.style.cssText = obj();
              };
            } else if (k === "class") {
              fns[k] = function () {
                ele.className = obj();
              };
            } else if (k === "style") {
              fns[k] = function () {
                const styleList = obj();
                const styles = Object.keys(styleList);
                styles.forEach(function (styKey) {
                  (ele as any).style[styKey] = styleList[styKey];
                });
              };
            } else if (k.indexOf("-") > 0) {
              fns[k] = function () {
                fixAttr(k, obj());
              };
            } else {
              fns[k] = function () {
                (ele as any)[k] = obj();
              };
            }
          }
        } else {
          if (k === "class") {
            ele.className = obj;
          } else if (k === "cssText") {
            ele.style.cssText = obj;
          } else if (k === "style") {
            const styles = Object.keys(obj);
            styles.forEach(function (styKey) {
              (ele as any).style[styKey] = obj[styKey];
            });
          } else if (k.indexOf("-") > 0) {
            fixAttr(k, obj);
          } else {
            (ele as any)[k] = obj;
          }
        }
      });

      if (typeof children === "function") {
        // 实现动态child
        fns.renderChildren = () => {
          let len;
          if (typeof props.len === "function") {
            len = props.len(state);
          } else if (typeof props.len === "number") {
            len = props.len;
          } else {
            len = !!props.len ? 1 : 0;
          }
          const oldLen = (ele as any).__len || 0;
          if (len > oldLen) {
            for (let i = oldLen; i < len; i++) {
              ele.append(children(i));
            }
          } else if (len < oldLen) {
            const list: Element[] = [];
            for (let i = oldLen; i >= len; i--) {
              list.push(ele.children.item(i));
            }
            list.forEach((e) => {
              if (e) {
                e.remove();
              }
            });
          }
          (ele as any).__len = len;
        };
      }

      // 实现 bind state 逻辑
      if (state) {
        if (!Array.isArray(state)) {
          state = [state];
        }
        let memoCache: any;
        const memo = props["memo"];
        if (typeof memo === "function") {
          memoCache = memo();
        }
        state.forEach(function (ob: any) {
          ob.__subscribeElement(function () {
            if (memo) {
              const nextCache = memo();
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
      const _useRef = props["ref"];

      if (typeof _useRef === "function") {
        _useRef(ele);
      } else if (_useRef) {
        _useRef.forEach(function (fn: any) {
          fn(ele);
        });
      }
    }
  }

  if (children && typeof children !== "function") {
    ele.append(...children);
  }

  onUpdate();

  return ele;
};

export default El;
