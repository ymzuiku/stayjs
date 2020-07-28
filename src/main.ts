import { dom, Ob } from "./lib";

const bb = Ob({ name: "aaaaa", age: 10 });
function Box() {
  return dom("div", { state: bb, len: () => bb.name.length }, () =>
    dom("div", [
      dom("button", { onclick: () => bb.update(() => (bb.age += 1)) }, ["Clear list"]),
      dom("div", { state: bb, textContent: () => [bb.age, bb.name, bb.name.length].join(",") }),
      dom("div", { state: bb, len: () => bb.name.length > 5 }, () => "hello"),
    ])
  );
}

function BigBox() {
  return bb.dom("div", { len: () => bb.name.length }, () =>
    bb.dom("div", [
      dom("button", { onclick: () => bb.update(() => (bb.age += 1)) }, ["Clear list"]),
      bb.dom("div", { textContent: () => [bb.age, bb.name, bb.name.length].join(",") }),
      bb.dom("div", { len: () => bb.name.length > 5 }, () => "hello"),
    ])
  );
}

function App() {
  const ob = Ob({ name: "dog" });

  dom(document.body, [
    dom("div", "bg-red-100", [
      "div",
      ob.dom("div", { textContent: () => ob.name }),
      ob.dom("input", {
        value: ob.name,
        class: "bg-red-300",
        oninput: (e) => {
          ob.update((s) => {
            s.name = e.target.value;
          });
        },
      }),
      dom("input", {
        oninput: (e) => {
          bb.update((v) => {
            v.name = e.target.value;
          });
        },
      }),
      BigBox(),
    ]),
  ]);
}

App();
