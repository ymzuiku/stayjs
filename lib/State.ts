export default function state<T, V>(initVal: T & V[]) {
  const fns = new Set();

  const obj = {
    val: initVal,
    next: () => {
      requestAnimationFrame(() => {
        fns.forEach((fn: any) => fn(obj.val));
      });
    },
    update: (fn: (v: T) => any) => {
      fn(obj.val);
      obj.next();
    },
    subscribe: (fn: (v: T) => any) => {
      fns.add(fn);
    },
    subscribeElement: (fn: (v: T) => any) => {
      return (el: any) => {
        function update(v: any) {
          if (!document.contains(el)) {
            el = null;
            fns.delete(update);
          }
          fn(v);
        }
        fn(obj.val);
        obj.subscribe(update);
      };
    },
  };
  return obj;
}
