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

export const htmlParser = htm.bind(h) as any;

const html = <T extends HTMLElement>(
  str: TemplateStringsArray,
  ...values: any[]
): T => {
  let token: any = htmlParser(str, ...values);
  // if (Array.isArray(token)) {
  //   return token.map((v) => {
  //     return El(v.tag, v.props, v.children);
  //   });
  // }
  return El(token.tag, token.props, token.children);
};

export default html;
