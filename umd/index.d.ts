import El from "./El";
import State from "./State";
import fixAttr from "./fixAttr";
import html from "./html";
export { El, State, fixAttr, html };
declare const _default: {
    El: {
        <T extends Element>(tagName: T, props?: string | ((ele: HTMLElement) => unknown) | import("./interface").IProps | (string | number | boolean | Function | HTMLElement | undefined)[] | undefined, children?: (string | number | boolean | Function | HTMLElement | undefined)[] | undefined): T;
        <T extends Element>(tagName: Function, props?: string | ((ele: HTMLElement) => unknown) | import("./interface").IProps | (string | number | boolean | Function | HTMLElement | undefined)[] | undefined, children?: (string | number | boolean | Function | HTMLElement | undefined)[] | undefined): T;
        <K extends "object" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr">(tagName: K, props?: string | ((ele: HTMLElement) => unknown) | import("./interface").IProps | (string | number | boolean | Function | HTMLElement | undefined)[] | undefined, children?: (string | number | boolean | Function | HTMLElement | undefined)[] | undefined): HTMLElementTagNameMap[K];
    };
    State: typeof State;
    fixAttr: typeof fixAttr;
    html: <T extends HTMLElement>(str: TemplateStringsArray, ...values: any[]) => T;
};
export default _default;
