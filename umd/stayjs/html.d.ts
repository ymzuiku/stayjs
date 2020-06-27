export declare function isElement(obj: any): boolean;
export declare const htmlParser: (strings: TemplateStringsArray, ...values: any[]) => {
    __token: boolean;
    tag: any;
    props: any;
    children: any[];
    key: any;
} | {
    __token: boolean;
    tag: any;
    props: any;
    children: any[];
    key: any;
}[];
declare const html: <T extends HTMLElement>(str: TemplateStringsArray, ...values: any[]) => {
    [key: string]: T;
};
export default html;
