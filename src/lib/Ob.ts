import dom, { Idom } from "./dom";

export default function Ob<T>(initVal: T) {
  const fns = new Set();

  const obj = {
    ...initVal,
    dom: ((tag: any, props: any, children: any) => {
      let realProps;
      if (typeof props === "string") {
        realProps = {
          className: props,
          ob: obj,
        };
      } else if (Array.isArray(props) || typeof props === "function") {
        realProps = {
          ob: obj,
        };
        children = props;
      } else {
        realProps = { ob: obj, ...props };
      }

      return dom(tag, realProps, children);
    }) as Idom,
    update: (fn: (v: T) => any) => {
      fn(obj);
      obj.$$.next();
    },
    $$: {
      next: () => {
        requestAnimationFrame(() => {
          fns.forEach((fn: any) => fn(obj));
        });
      },
      subscribe: (fn: (v: T) => any) => {
        fns.add(fn);
      },
      subscribeElement: (fn: (v: T) => any, onDestroy?: Function) => {
        return (el: any) => {
          function update(v: any) {
            if (!document.contains(el)) {
              el = null;
              fns.delete(update);
              if (onDestroy) {
                onDestroy();
              }
            }
            fn(v);
          }
          fn(obj);
          obj.$$.subscribe(update);
        };
      },
    },
  };

  return obj;
}
