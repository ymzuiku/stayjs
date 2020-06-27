export default function State<T>(initVal: T): T & {
    __next: () => void;
    update: (fn: (v: T) => any) => void;
    __subscribe: (fn: (v: T) => any) => void;
    __subscribeElement: (fn: (v: T) => any, onDestroy?: Function | undefined) => (el: any) => void;
};
