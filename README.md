# stayjs

Only a library, Use library create web application, We don't need a framework.

We love sevlte's design, bu we love JS/TS more, not .sevlte.

`stayjs` is just stay in javascript/typescript, we didn't need JSX, use javascript create like XML's dom tree; we didn't need VDO(like sevlte), Observer/Subject update dom.

## Faster!!!

`stayjs` Size: no gizp 2k.

And like sevlte, no need diff VDOM, we only use Observer/Subject update dom. you can go back native js create all your feature.

## Install

We can use React-cli: create-react-app, or vue-cli, or customer create any npm project. Now we use create-react-app.

```sh
create-react-app hello-stayjs --typescript
```

Install stayjs library, and start project:

```sh
$ npm install --save stayjs
$ npm run start
```

## Use

### Simple:

A element only is `HTMLElement`, we are vanilla.js!

```js
import { El } from "stayjs";

const button = El("button", ["touch me"]); // button only a HTMLButtonElement

document.body.append(button);
```

## DOM Tree and Component:

A Component only is `()=> HTMLElement`, we are vanilla.js!

```js
import { El } from "stayjs";

function Box() {
  return El("div", [
    El("h1", { textContent: "hello" }),
    El("h2", { textContent: "world" }),
    El("button", ["touch me"]),
  ]);
}

document.body.append(Box());
```

## Set State:

El type like: `El(Element|string, Props|className|children, children|()=>children)=>Element`

We use State:

`state:[state]`: subject state's update, if element is remove, auto unsubject.

`state.update`: update all subject's element

```js
import { El, State } from "stayjs";

function Box() {
  const state = State({
    name: "Alex",
    age: 10,
  });

  return El("div", [
    El("h1", { state, textContent: () => state.val.name }),
    El("h2", { state, textContent: () => state.val.age }),
    El("button", { onClick: () => state.update((val) => val.age++) }, [
      "touch me, change age",
    ]),
  ]);
}

document.body.append(Box());
```

## Double bind value:

```js
import { El, State } from "stayjs";

function Box() {
  const state = State({
    text: "Please input the <input />",
  });

  return El("div", [
    El("p", { state, textContent: () => state.val.text }),
    El("input", {
      oninput: (e) => state.update((val) => (val.text = e.target.value)),
    }),
  ]);
}

document.body.append(Box());
```

## Set Props

Use `El(<Component>, ....)` change component top level tree props

```js
import { El, State } from "stayjs";

// Top level element don't need props
function BigButton() {
  return El("button", {
    style: { fontSize: "30px", textContent: "no props button" },
  });
}

function Box() {
  const state = State(["dog", "cat", "fish"]);

  return El("div", [
    El("p", { textContent: "hello button:" }),
    BigButton(),
    El(BigButton, {
      textContent: "change props's button",
      style: { background: "#f33" },
    }),
  ]);
}

document.body.append(Box());
```

Use `Component(props)` change component sub level tree props

```js
import { El, State } from "stayjs";

function BigButton({ fontSize = "30px", background, color }) {
  return El("div", {style:{color}} [
    El("button", {
      style: { fontSize, color, textContent: "no props button" },
    }),
  ]);
}

function Box() {
  const state = State(["dog", "cat", "fish"]);

  return El("div", [
    El("p", { textContent: "hello button:" }),
    BigButton({fontSize: '50px', background:'#f55', color:'#fff'})
  ]);
}

document.body.append(Box());
```

## Map Render Children

Children when update rerender, we need use `()=>[()=>Element, Element]` replace `[Element, Element]`

```js
import { El, State } from "stayjs";

function Box() {
  const state = State({ age: 10 });

  return El("div", { state }, () => [
    El("button", { onclick: () => state.update(() => (state.age += 1)) }, [
      "Clear list",
    ]),
    () => El("div", [state.age]),
  ]);
}

document.body.append(Box());
```

## Application's global state/store

Global state is same to Component state, just move out state to Component

```js
import { El, State } from "stayjs";

const state = State({
  text: "Please input the <input />",
});

function PageA() {
  return El("div", [
    El("p", { state, textContent: () => state.val.text }),
    El("input", {
      oninput: (e) => state.update((val) => (val.text = e.target.value)),
    }),
  ]);
}

function PageB() {
  return El("div", [
    El("p", { state, textContent: () => state.val.text }),
    El("input", {
      oninput: (e) => state.update((val) => (val.text = e.target.value)),
    }),
  ]);
}

document.body.append(PageA(), PageB());
```

## Like react useMemo

`stayjs` is high performance，we can controll state's state. and we can use `memo` intercept detail update.

This example, `h1` is no rerender, because it memo's data no change.

```js
import { El, State } from "stayjs";

function Box() {
  const state = State({
    name: "Alex",
    age: 10,
  });

  return El("div", [
    El("h1", {
      state: [state],
      memo: (val) => [val.name],
      textContent: () => state.val.name,
    }),
    El("h2", {
      state: [state],
      memo: (val) => [val.age],
      textContent: () => state.val.age,
    }),
    El("button", { onClick: () => state.update((val) => val.age++) }, [
      "touch me, change age",
    ]),
  ]);
}

document.body.append(Box());
```

# Ecology

## Router

We are vanilla.js, so we can easy use all vanilla.js library.

Here have a simple route: `npm i vanilla-route`, vanilla-route like react-route, can splice pages, and can prefetch page.

```js
import route from "vanilla-route";
import { El, State } from "stayjs";

const state = State({
  text: "Please input the <input />",
});

function PageA() {
  return El("div", [
    El("p", { state: [state], textContent: () => state.val.text }),
    El("input", {
      oninput: (e) => state.update((val) => (val.text = e.target.value)),
    }),
  ]);
}

function PageB() {
  return El("div", [
    El("p", { state: [state], textContent: () => state.val.text }),
    El("input", {
      oninput: (e) => state.update((val) => (val.text = e.target.value)),
    }),
  ]);
}

route.use("/", PageA);
route.use("/page-b", PageB);

// sync load page-c.js at open '/page-c' url
route.use("/page-c", () => import("./PageC").then((v) => v.default));

// render route, need after all route.use.
route.render();
// render.target is HTMLDivElement, we need append in document rendered it.
document.body.append(route.target);
```

## CSS

CSS feature is Project-cli's work. If we use create-react-app, we can use css or scss like in react:

index.module.css:

```css
.box {
  background: #ff9;
}
.hello {
  background: #f55;
}
.world {
  background: #66f;
}
```

index.ts:

El type like: `El(Element|string, Props|className|children, children|()=>children)=>Element`

```js
import { El } from "stayjs";
import css from "./index.module.css";

function Box() {
  return El("div", css.box, [
    El("h1", { className: css.hello, textContent: "hello" }),
    El("h2", { className: css.world, textContent: "world" }),
    El("button", ["touch me"]),
  ]);
}

document.body.append(Box());
```

We can use css-in-js also: `npm install --save vanilla-css-js`, and read it's README.md

## Animation

Ok, we need show this again: `We are vanilla.js, so we can easy use all vanilla.js library.`

I love animejs:

```sh
npm install --save animejs
```

Example:

```js
import { El } from "stayjs";
import anime from "animejs";

function Box() {
  const label = El("h1");

  return El("div", [
    El(label, { textContent: "hello" }),
    El("button", {
      onclick: () => {
        anime({ target: label, translateX: 100 });
      },
      textContent: "run anime",
    }),
  ]);
}

document.body.append(Box());
```

## End

stayjs is vanilla.js library, so we can use all js library complate your project. and use javascript create like XML's dom tree.
enjoy stayjs, thx.
