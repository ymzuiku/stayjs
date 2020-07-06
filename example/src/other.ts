import { State, html } from "./lib";

interface Props {
  name: string;
  age: number;
  children: any;
}

function Dog({ name, age, children }: Props) {
  // console.log(children);
  return html`
    <h1>name:${name}</h1>
    <p>age:${age}</p>
    ${children}
    <!-- <tag *=${children}></tag> -->
  `;
}

function Cat({ name, age }: Props) {
  return html`
    <span>
      <h1>name:${name}</h1>
      <p>age:${age}</p>
    </span>
  `;
}

function Other({ children }: any) {
  const state = State({
    name: "dog",
    age: 20,
    list: ["dog", "cat", "fish"],
  });

  return html`
    <div>
      <h1 state=${state} memo=${() => [state.age]} id="state-age">
        hello-${() => state.age}
      </h1>
      ${children}
      <a href="/aaaaaaa">aaaaa</a>
      ${() =>
        state.list.map((v) => {
          return html`<div>${v}</div>`;
        })}
      <p class="bg-green-600" state=${state}>{{age}}</p>
      -->
      <button
        onclick=${() => {
          console.log("on click");
          state.update((s) => (s.age += 1));
        }}
      >
        button
      </button>
    </div>
  `;
}

export default Other;
