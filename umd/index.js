!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).stayjs={})}(this,function(e){"use strict";function s(n,t){return function(e){t?e.setAttribute(n,t):e.removeAttribute(n)}}function p(e,n){var t=n().filter(Boolean),f=t.length,o=e.childNodes.length;if(0===f)e.innerText="";else if(f<o){for(var i=[],r=f;r<o;r++)i.push(e.childNodes.item(r));i.forEach(function(e){return e.remove()})}else o<f&&e.append.apply(e,t.splice(o,t.length))}var d={$bind:1,$append:1,$memo:1,$ref:1};e.El=function(e,i,t){var r=e;"string"==typeof e&&(r=document.createElement(e));var c=new Map;if(i)if("string"==typeof i)r.className=i;else if("function"==typeof i)i(r);else if("[object Array]"===Object.prototype.toString.call(i))t=i;else{Object.keys(i).forEach(function(e){if(!d[e]){var t=i[e];if("function"==typeof t)if(0===e.indexOf("on"))r[e]=t;else if(0===e.indexOf("add")){var n=e.replace("add","on"),f=r[n];r[n]=function(e){f&&f(e),t(e)}}else if("-"===e[0]){var o=e.replace("-","");c.set(e,function(){s(o,t())})}else"style"===e?c.set(e,function(){var n=t();Object.keys(n).forEach(function(e){r.style[e]=n[e]})}):c.set(e,function(){r[e]=t()});else if("style"===e)Object.keys(t).forEach(function(e){r.style[e]=t[e]});else r[e]=t}});var n=i.$bind;if(n){var f,o,u=i.$append;"function"==typeof u&&(f=u());var a=i.$memo;"function"==typeof a&&(o=a()),n.forEach(function(e){e.subscribeElement(function(){if(u){for(var e=u(),n=0;n<e.length;n++)if(e[n]!==f[n]){p(r,t);break}f=e}if(a){for(e=a(),n=0;n<e.length;n++)if(e[n]!==o[n]){c.forEach(function(e){return e()});break}o=e}else c.forEach(function(e){return e()})})(r)})}var l=i.$ref;"function"==typeof l?l(r):l&&l.forEach(function(e){return e(r)})}return"function"==typeof t?r.append.apply(r,t().filter(Boolean)):t&&r.append.apply(r,t.filter(Boolean)),c.forEach(function(e){return e()}),r},e.State=function(e){var o=new Set,n={val:e,next:function(){requestAnimationFrame(function(){o.forEach(function(e){return e(n.val)})})},update:function(e){e(n.val),n.next()},subscribe:function(e){o.add(e)},subscribeElement:function(f){return function(t){f(n.val),n.subscribe(function e(n){document.contains(t)||(t=null,o.delete(e)),f(n)})}}};return n},e.fixAttr=s,e.fixChildren=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
