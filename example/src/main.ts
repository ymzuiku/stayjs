import "flavorcss";

import {html} from "./lib";
import Other from "./other";

function Box() {
    return html`
    <div>
      hello
      <em extend=${Other}>
        <div>dog</div>
        <div>cat</div>
      </em>
    </div>
  `;
}

const rootApp = document.getElementById("app")!;
rootApp.innerHTML = "";

console.time("b");
rootApp.append(Box());
console.timeEnd("b");
// document.body.append(Box());
