import { El, State } from "./lib";

const bb = State({ name: "aaaaa", age: 10 });
function Box() {
  return El("div", { state: bb, len: () => bb.name.length }, () =>
    El("div", [
      El("button", { onclick: () => bb.update(() => (bb.age += 1)) }, ["Clear list"]),
      El("div", { state: bb, textContent: () => [bb.age, bb.name, bb.name.length].join(",") }),
      El("div", { state: bb, len: () => bb.name.length > 5 }, () => "hello"),
    ])
  );
}

function App() {
  const state = State({ name: "dog" });

  El(document.body, [
    El("div", "bg-red-100", [
      "div",
      El("div", { state, textContent: () => state.name }),
      El("input", {
        state,
        value: state.name,
        class: "bg-red-300",
        oninput: (e) => {
          state.update((s) => {
            s.name = e.target.value;
          });
        },
      }),
      El("input", {
        oninput: (e) => {
          bb.update((v) => {
            v.name = e.target.value;
          });
        },
      }),
      Box(),
    ]),
  ]);
}

App();
