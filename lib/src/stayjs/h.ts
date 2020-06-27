import { El } from "./index";

const h = (...args: any[]) => {
  if (args[1] && args[1].class) {
    args[1].className = args[1].class
  }
  if (typeof args[0] === 'function') {
    h(args[0]())
  }
  // El(args[0], args[1])
  console.log(args);
};

export default h;
