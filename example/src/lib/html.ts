import htm from "htm";
import El from "./El";

function h(tag: any, props: any, ...children: any[]) {
  return {
    __token: true,
    tag,
    props: props || {},
    children,
    key: (props && props.key) || null,
  };
}

export function isElement(obj: any) {
  return Object.prototype.toString.call(obj).indexOf("lement") > 0;
}

export const htmlParser = htm.bind(h);

const html = <T extends HTMLElement>(
  str: TemplateStringsArray,
  ...values: any[]
): { [key: string]: T } => {
  let token: any = htmlParser(str, ...values);
  return El(token.tag, token.props, token.children);
};

export default html;
