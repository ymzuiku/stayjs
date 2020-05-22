export default function state<T, V>(initVal: T & V[]): {
    val: T & V[];
    next: () => void;
    update: (fn: (v: T) => any) => void;
    subscribe: (fn: (v: T) => any) => void;
    subscribeElement: (fn: (v: T) => any) => (el: any) => void;
};
