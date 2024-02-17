(()=>{"use strict";var e={904:(e,t,n)=>{n.d(t,{c:()=>s});var o=n(500),r=n.n(o),a=n(312),c=n.n(a)()(r());c.push([e.id,"body {\n    padding: 0px;\n    margin: 0px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\nul {\n    list-style-type: none;\n}\n\n.projects-container {\n    border: 1px solid blue;\n    height: 100vh;\n}\n\n.todo-container {\n    border: 1px solid green;\n    height: 100vh;\n}",""]);const s=c},312:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],s=0;s<e.length;s++){var i=e[s],l=o.base?i[0]+o.base:i[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=n(a[c]);t[s].references--}for(var i=o(e,r),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=i}}},176:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},808:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},120:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},936:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(e){let t=[];return{name:e,getTodos:()=>t,addTodo:e=>{t.push(e)},removeTodo:e=>{},loadTodos:e=>{for(let n of e)t.push(n)}}}var t=n(596),o=n.n(t),r=n(520),a=n.n(r),c=n(176),s=n.n(c),i=n(120),l=n.n(i),d=n(808),u=n.n(d),p=n(936),f=n.n(p),m=n(904),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),o()(m.c,v),m.c&&m.c.locals&&m.c.locals,document.addEventListener("DOMContentLoaded",(t=>{let n=[];if(function(e){let t;try{t=window.localStorage;const e="__storage_test__";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}()&&localStorage.getItem("projects")){let t=JSON.parse(localStorage.getItem("projects"));for(let o of t){let t=Object.keys(o).pop(),r=e(t);r.loadTodos(o[t]),n.push(r)}}else{let t=e("Default");t.addTodo({title:"Example Title",description:"Example Description",dueDate:"Feb 21",priority:1}),n.push(t),function(e){let t=[];for(let n of e){let e=n.name,o={[e]:[]};for(let t of n.getTodos())o[e].push(t);t.push(o)}localStorage.setItem("projects",JSON.stringify(t))}(n)}!function(e){const t=document.querySelector(".projects"),n=[];for(let t=0;t<e.length;t++){const o=document.createElement("li");o.classList.add("project"),o.id=t,o.textContent=e[t].name;const r=document.createElement("ul");r.classList.add("todos"),o.appendChild(r);for(let n=0;n<e[t].getTodos().length;n++){const o=document.createElement("li"),a=e[t].getTodos()[n].title;o.classList.add("todo"),o.id=`${t}-${n}`,o.textContent=a,r.appendChild(o)}n.push(o)}t.replaceChildren(...n)}(n)}))})()})();