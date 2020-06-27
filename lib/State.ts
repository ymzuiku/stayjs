export default function State<T>(initVal: T) {
  const fns = new Set();
  const obj = {
    ...initVal,
    __next: () => {
      requestAnimationFrame(() => {
        fns.forEach((fn: any) => fn(obj));
      });
    },
    update: (fn: (v: T) => any) => {
      fn(obj);
      obj.__next();
    },
    __subscribe: (fn: (v: T) => any) => {
      fns.add(fn);
    },
    __subscribeElement: (fn: (v: T) => any, onDestroy?: Function) => {
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
        obj.__subscribe(update);
      };
    },
  };
  return obj;
}
