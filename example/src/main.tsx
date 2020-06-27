import "flavorcss";

import { El, State } from "./lib";
import Other from "./other";

function Box() {
  const state = State({ age: 10, list: [] as any });

  return El("div", { state }, [
    // () => {
    //   console.log("aaa");
    //   return state.age > 13 && El(label, { state, textContent: state.age });
    // },
    El(
      "div",
      {
        class: "bg-yellow-500",
        onclick: () => {
          state.update((s) => (s.age += 1));
          state.update((s) => s.list.push("aa"));
        },
        state,
      },
      [() => state.age + "add"]
    ),
    El(
      "div",
      {
        className: "bg-indigo-500",
        onclick: () => {
          state.update((s) => (s.age -= 1));
        },
      },
      ["sub"]
    ),
    El(
      "div",
      {
        className: "bg-red-300",
        state,
        textContent: () => state.age,
      },
      ["flavorcss"]
    ),
    El("div", [Other()]),
    El(
      "button",
      {
        state,
        className: () => [state.age > 13 && "none"].join(" "),
        onclick: () => {
          console.log("aaa");
        },
      },
      ["run anime"]
    ),
  ]);
}
const rootApp = document.getElementById("app")!;
rootApp.innerHTML = "";
rootApp.append(Box());
// document.body.append(Box());
