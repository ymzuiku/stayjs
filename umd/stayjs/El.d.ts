import { IProps } from "./interface";
declare type IElementCallback = (ele: HTMLElement) => unknown;
declare type Children = (HTMLElement | string | number | undefined | boolean | Function)[];
declare function IEl<T extends Element>(tagName: T, props?: IElementCallback | IProps | string | Children, children?: Children): T;
declare function IEl<T extends Element>(tagName: Function, props?: IElementCallback | IProps | string | Children, children?: Children): T;
declare function IEl<K extends keyof HTMLElementTagNameMap>(tagName: K, props?: IElementCallback | IProps | string | Children, children?: Children): HTMLElementTagNameMap[K];
declare const El: typeof IEl;
export default El;
