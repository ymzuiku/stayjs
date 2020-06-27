function fixAttr(key: string, value?: string | number | boolean) {
  return (el: HTMLElement) => {
    if (!value) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value as any);
    }
  };
}

export default fixAttr;
