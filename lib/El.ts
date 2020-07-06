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

// export function isElement(obj: any) {
//   return Object.prototype.toString.call(obj).indexOf("lement") > 0;
// }

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
};

function mkChild(sub: any, el: any) {
  if (el && el.tagName && el.tagName !== "style") {
    if (typeof sub === "number" || typeof sub === "string") {
      let a = sub;
      sub = document.createElement("span");
      sub.textContent = a;
    } else if (sub === undefined) {
      sub = document.createElement("span");
    }
  }
  return sub;
}

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

  let fns: any;
  let fnchilds: any;
  let state = props && props["state"];
  let onDestory: Function;
  if (state) {
    onDestory = function () {
      fns = null;
      fnchilds = null;
      onDestory = null as any;
    };
  }
  const onUpdate = function () {
    if (fns) {
      Object.keys(fns).forEach(function (k) {
        fns[k]();
      });
    }
    if (fnchilds) {
      Object.keys(fnchilds).forEach(function (k) {
        const [run, el] = fnchilds[k];
        if (el.parentElement) {
          const sub = mkChild(run(), el.parentElement);
          el.parentElement.replaceChild(sub, el);
          fnchilds[k] = [run, sub];
        }
      });
    }
  };

  let appendList: any[] = [];
  let isArrayProps = Array.isArray(props);
  if (props && isArrayProps) {
    children = props;
  }

  const expchild = function (childs: any) {
    if (childs && childs.length) {
      for (let i = 0; i < childs.length; i++) {
        if (Array.isArray(childs[i])) {
          expchild(childs[i]);
          return;
        }
        if (childs[i]) {
          if (childs[i].__token) {
            appendList.push(
              El(childs[i].tag, childs[i].props, childs[i].children)
            );
          } else if (typeof childs[i] === "function") {
            const sub = mkChild(childs[i](), ele);
            if (props && props.state) {
              if (!fnchilds) {
                fnchilds = {};
              }
              fnchilds[i] = [childs[i], sub];
            }
            appendList.push(sub);
          } else {
            appendList.push(childs[i]);
          }
        }
      }
    }
  };
  expchild(children);

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
              let nextCache = memo();
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

  if (appendList.length) {
    const end = [] as any;
    appendList.forEach((v) => {
      if (Array.isArray(v)) {
        v.forEach((v2) => {
          end.push(v2);
        });
      } else {
        end.push(v);
      }
    });
    ele.append(...end);
  }

  onUpdate();

  return ele;
};

export default El;
