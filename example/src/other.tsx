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
  // console.log(children);
  return html`
    <span>
      <h1>name:${name}</h1>
      <p>age:${age}</p>
      ${children}
      <!-- <tag *=${children}></tag> -->
    </span>
  `;
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
  return html`
    <span>
      <h1>name:${name}</h1>
      <p>age:${age}</p>
    </span>
  `;
}

function Other() {
  const state = State({
    name: "dog",
    age: 20,
  });

  return html`
    <div>
      <h1 state=${state} memo=${() => [state.age]} id="state-age">
        hello-${() => {
          return state.age;
        }}
      </h1>
      <em extend=${Dog} name="dog" age="100">
        <div>hello children</div>
      </em>
      <em extend=${Cat} name="cat">
        <div>hello-cat</div>
      </em>
      <p class="bg-green-600" state=${state}>${() => state.age}</p>
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
