const fs = require("fs-extra");

const file = fs.readFileSync("./src/other.ts");

let str = "";

// Array(5000)
//   .fill(0)
//   .forEach((v, i) => {
//     str += `import Test${i} from './some/test${i}.tsx';\n`;
//     fs.writeFileSync(`./src/some/test${i}.tsx`, file);
//   });

const main = `
import "flavorcss";

import { El, State } from "./stayjs";
import Other from "./other";

function Box() {
  const label = El("h1");
  const state = State({ age: 10 });

  return El("div", [
    El(label, { textContent: "fdsafdsafdsa" }),
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

  `;

fs.writeFileSync("./src/main.tsx", main);
