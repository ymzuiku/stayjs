!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).stayjs={})}(this,function(e){"use strict";function a(t,n){return function(e){n?e.setAttribute(t,n):e.removeAttribute(t)}}function l(e,t){var n=t().filter(Boolean),i=n.length,o=e.childNodes.length;if(0===i)e.innerText="";else if(i<o){for(var f=[],r=i;r<o;r++)f.push(e.childNodes.item(r));f.forEach(function(e){return e.remove()})}else o<i&&e.append.apply(e,n.splice(o,n.length))}var p={useState:1,useChildren:1,useMemo:1};e.DOM=function(e,i,n){var o=e;"string"==typeof e&&(o=document.createElement(e));var f=new Map;if(i)if("string"==typeof i)o.className="props";else if("function"==typeof i)i(o);else if("[object Array]"===Object.prototype.toString.call(i))n=i;else{var t=i.useState;if(t){var r,u,c=i.useChildren;c&&(r=c());var s=i.useMemo;s&&(u=s()),t.forEach(function(e){e.subscribeElement(function(){if(c){for(var e=c(),t=0;t<e.length;t++)if(e[t]!==r[t]){l(o,n);break}r=e}if(s){for(e=s(),t=0;t<e.length;t++)if(e[t]!==u[t]){f.forEach(function(e){return e()});break}u=e}else f.forEach(function(e){return e()})})(o)})}Object.keys(i).forEach(function(e){if(!p[e]){var n=i[e];if("function"==typeof n)if(0===e.indexOf("on"))o[e]=n;else if("-"===e[0]){var t=e.replace("-","");f.set(e,function(){a(t,n())})}else"style"===e?f.set(e,function(){var t=n();Object.keys(t).forEach(function(e){o.style[e]=t[e]})}):f.set(e,function(){o[e]=n()});else if("style"===e)Object.keys(n).forEach(function(e){o.style[e]=n[e]});else o[e]=n}})}return"function"==typeof n?o.append.apply(o,n().filter(Boolean)):n&&o.append.apply(o,n.filter(Boolean)),f.forEach(function(e){return e()}),o},e.State=function(e){var o=new Set,t={val:e,next:function(){requestAnimationFrame(function(){o.forEach(function(e){return e(t.val)})})},update:function(e){e(t.val),t.next()},subscribe:function(e){o.add(e)},subscribeElement:function(i){return function(n){i(t.val),t.subscribe(function e(t){document.contains(n)||(n=null,o.delete(e)),i(t)})}}};return t},e.fixAttr=a,e.fixChildren=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
