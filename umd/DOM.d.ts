import { IProps } from "./interface";
declare type IElementCallback = (ele: HTMLElement) => unknown;
declare type Children = (HTMLElement | string | number | undefined | boolean)[];
declare type RenderChildren = () => Children;
declare function IStay<T extends Element>(tagName: T, props?: IElementCallback | IProps | string | Children, children?: RenderChildren | Children): T;
declare function IStay<K extends keyof HTMLElementTagNameMap>(tagName: K, props?: IElementCallback | IProps | string | Children, children?: RenderChildren | Children): HTMLElementTagNameMap[K];
interface ElePrototypeOptions {
}
declare const DOM: typeof IStay & ElePrototypeOptions;
export default DOM;
