export default function State<T>(initVal: T): {
    val: T;
    next: () => void;
    update: (fn: (v: T) => any) => void;
    subscribe: (fn: (v: T) => any) => void;
    subscribeElement: (fn: (v: T) => any) => (el: any) => void;
};
