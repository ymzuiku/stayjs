import { El, State } from "./lib";

function Box() {
  const state = State({ name: "aaaaa", age: 10 });

  return El("div", { state, len: 20 }, () => [
    El("button", { onclick: () => state.update(() => (state.age += 1)) }, ["Clear list"]),
    El("div", { state, textContent: () => [state.age, state.name, state.name.length].join(",") }),
    El("div", { state, len: state.age > 12 }, () => ["hello"]),
  ]);
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
      Box(),
    ]),
  ]);
}

App();
