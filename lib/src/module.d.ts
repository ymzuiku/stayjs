declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
  interface ElementChildrenAttribute {
    children: any; // specify children name to use
  }
}
