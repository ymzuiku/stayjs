import { State } from "./lib";
import html from "./lib/html";

function Dog({
  name,
  age,
  children,
}: {
  name: string;
  age: number;
  children: any;
}) {
  return html`<main>
    <h1>name:${name}</h1>
    <p>age:${age}</p>
    ${children}
  </main>`;
}

function Cat({
  name,
  age,
  render,
}: {
  name: string;
  age: number;
  render: any;
}) {
  return html`<main>
    <h1>name:${name}</h1>
    <p>age:${age}</p>
    ${render("aaaaaaa")}
  </main>`;
}

function Other() {
  const state = State({
    name: "dog",
    age: 20,
  });

  return html`<div>
    <style>
      .box {
        background: #f00;
      }
    </style>
    <h1 state=${state} memo=${() => [state.name]} id="state-age">
      hello-${() => {
        return state.age;
      }}
    </h1>
    ${() =>
      state.age > 12 &&
      html`<${Dog} name="dog" age="100">
      <div class="box">hello children</div>
    </${Dog}>`}
    <${Cat}
      render=${(text: string) => html`<div class="bg-blue-500">${text}</div>`}
    />
    <p class="bg-green-600" state=${state} textContent=${() => state.age}></p>
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
