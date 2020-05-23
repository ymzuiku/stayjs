import { IProps } from "./interface";
declare type IElementCallback = (ele: HTMLElement) => unknown;
declare type Children = (HTMLElement | string | number | undefined | boolean)[];
declare type RenderChildren = () => Children;
declare function IEl<T extends Element>(tagName: T, props?: IElementCallback | IProps | string | Children, children?: RenderChildren | Children): T;
declare function IEl<K extends keyof HTMLElementTagNameMap>(tagName: K, props?: IElementCallback | IProps | string | Children, children?: RenderChildren | Children): HTMLElementTagNameMap[K];
interface ElePrototypeOptions {
}
declare const El: typeof IEl & ElePrototypeOptions;
export default El;
