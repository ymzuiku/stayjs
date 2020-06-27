import { El } from "./stayjs";

function Other() {
  const label = El("h1");

  return El("div", [
    El(label, { textContent: "Other" }),
    El('div', "bg-red-300", ['flavorcss']),
    El("button", {
      onclick: () => {
        console.log("aaa");
      },
      textContent: "run anime",
    }),
  ]);
}

export default Other;
