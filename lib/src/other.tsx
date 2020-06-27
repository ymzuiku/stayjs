import { El, State, html } from "./stayjs";

function Other() {
  const label = El("h1");
  const state = State({
    name: "dog",
    age: 20,
  });

  return html`<div>
    <h1>${() => state.name}</h1>
    <h1 state=${state}>
      hello-${() => {
        console.log("load");
        return state.age;
      }}
    </h1>
    <button
      onclick=${() => {
        console.log("aaaaaa");
        state.update((s) => (s.age += 1));
      }}
    >
      button
    </button>
  </div>`;
}

export default Other;
