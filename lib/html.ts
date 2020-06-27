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

export const htmlParser = htm.bind(h);

const html = <T extends HTMLElement>(
  str: TemplateStringsArray,
  ...values: any[]
): T | T[] => {
  let token: any = htmlParser(str, ...values);
  return El(token.tag, token.props, token.children);
};

export default html;
