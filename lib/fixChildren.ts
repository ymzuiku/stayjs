export default function fixChildren(ele: HTMLElement, children: Function) {
  const nextChilds: HTMLElement[] = children().filter(Boolean) as any;
  const nextLength = nextChilds.length;
  const oldLength = ele.childNodes.length;

  if (nextLength === 0) {
    ele.innerText = "";
  } else if (oldLength > nextLength) {
    let needRemove = [];
    for (let i = nextLength; i < oldLength; i++) {
      needRemove.push(ele.childNodes.item(i));
    }
    needRemove.forEach((v) => v.remove());
  } else if (oldLength < nextLength) {
    ele.append(...nextChilds.splice(oldLength, nextChilds.length));
  }
}
