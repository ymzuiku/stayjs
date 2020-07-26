import "flavorcss";
import { El, State } from "./lib";

function Box() {
  return El("div", [
    El("h1", { textContent: "hello" }),
    El("h2", { textContent: "world" }),
    El("button", "flavor bg-red-200", ["touch me"]),
  ]);
}


const rootApp = document.getElementById("app")!;
rootApp.innerHTML = "";

rootApp.append(Box());
