// import h from "./stayjs/h";

// const App = () => {
//   return (
//     <div class="test css" onclick={() => console.log("click div")}>
//       <p>hello</p>
//       <button>world</button>
//       <div name="have sub" children={<button>sub</button>} />
//     </div>
//   );
// };

// console.log(<App />);

// export default 0;

import "flavorcss";

import { El, State } from "./stayjs";
import Other from "./other";

function Box() {
  const label = El("h1");
  const state = State({ age: 10 });

  return El("div", [
    El(label, { textContent: "fdsafdasfds" }),
    El(
      "div",
      {
        className: "bg-red-300",
        $bind: [state],
        textContent: () => state.val.age,
        onclick: () => state.update((val) => val.age + 1),
      },
      ["flavorcss"]
    ),
    El("div", [Other()]),
    El("button", {
      onclick: () => {
        console.log("aaa");
      },
      textContent: "run anime",
    }),
  ]);
}
const rootApp = document.getElementById("app")!;
rootApp.innerHTML = "";
rootApp.append(Box());
// document.body.append(Box());
