!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("htm")):"function"==typeof define&&define.amd?define(["exports","htm"],t):t((e=e||self).html={},e.htm)}(this,function(e,t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var m={state:1,memo:1,ref:1};function h(e,t){if(t&&t.tagName&&"style"===t.tagName)if("number"==typeof e||"string"==typeof e){var n=e;(e=document.createElement("span")).textContent=n}else void 0===e&&(e=document.createElement("span"));return e}var v=function(e,f,t){var i,o,a=e;if("string"==typeof e)a=document.createElement(e);else if("function"==typeof e)return f&&t&&(f.children=t),e(f);var n,r=f&&f.state;r&&(n=function(){n=o=i=null});function s(){i&&Object.keys(i).forEach(function(e){i[e]()}),o&&Object.keys(o).forEach(function(e){var t=o[e],n=t[0],r=t[1];if(r.parentElement){var f=h(n(),r.parentElement);r.parentElement.replaceChild(f,r),o[e]=[n,f]}})}var c=[],l=Array.isArray(f);f&&l&&(t=f);var u=function(e){if(e&&e.length)for(var t=0;t<e.length;t++){if(Array.isArray(e[t]))return void u(e[t]);if(e[t])if(e[t].__token)c.push(v(e[t].tag,e[t].props,e[t].children));else if("function"==typeof e[t]){var n=h(e[t](),a);f&&f.state&&((o=o||{})[t]=[e[t],n]),c.push(n)}else c.push(e[t])}};if(u(t),f)if("string"==typeof f)a.className=f;else if("function"==typeof f)f(a);else if(!l){if(Object.keys(f).forEach(function(e){if(!m[e]){var n=f[e];if("function"==typeof n)if(i=i||{},0===e.indexOf("on"))a[e]=n;else if(0===e.indexOf("listen")){var t=e.replace("listen","on"),r=a[t];a[t]=function(e){r&&r(e),n(e)}}else if("-"===e[0]){e.replace("-","");i[e]=function(){!void n()}}else i[e]="cssText"===e?function(){a.style.cssText=n()}:"class"===e?function(){a.className=n()}:"style"===e?function(){var t=n();Object.keys(t).forEach(function(e){a.style[e]=t[e]})}:function(){a[e]=n()};else if("class"===e&&(a.className=n),"cssText"===e)a.style.cssText=n;else if("style"===e){Object.keys(n).forEach(function(e){a.style[e]=n[e]})}else a[e]=n}}),r){var p;Array.isArray(r)||(r=[r]);var y=f.memo;"function"==typeof y&&(p=y()),r.forEach(function(e){e.__subscribeElement(function(){if(y){for(var e=y(),t=0;t<e.length;t++)if(e[t]!==p[t]){s();break}p=e}else s()},n)(a)})}var d=f.$ref;"function"==typeof d?d(a):d&&d.forEach(function(e){e(a)})}return c.length&&a.append.apply(a,c),s(),a};var f=t.bind(function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return{__token:!0,tag:e,props:t||{},children:n,key:t&&t.key||null}});e.default=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=f.apply(void 0,[e].concat(t));return v(r.tag,r.props,r.children)},e.htmlParser=f,e.isElement=function(e){return 0<Object.prototype.toString.call(e).indexOf("lement")},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=html.js.map