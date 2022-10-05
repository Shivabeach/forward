!function(){"use strict";var e=[,function(e,t,n){n.r(t),n.d(t,{decode:function(){return y},encode:function(){return v},toASCII:function(){return S},toUnicode:function(){return M},ucs2decode:function(){return g},ucs2encode:function(){return m}});const o=2147483647,r=36,c=/^xn--/,u=/[^\0-\x7E]/,l=/[\x2E\u3002\uFF0E\uFF61]/g,i={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},s=Math.floor,d=String.fromCharCode;function a(e){throw new RangeError(i[e])}function f(e,t){const n=e.split("@");let o="";n.length>1&&(o=n[0]+"@",e=n[1]);const r=function(e,t){const n=[];let o=e.length;for(;o--;)n[o]=t(e[o]);return n}((e=e.replace(l,".")).split("."),t).join(".");return o+r}function g(e){const t=[];let n=0;const o=e.length;for(;n<o;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<o){const o=e.charCodeAt(n++);56320==(64512&o)?t.push(((1023&r)<<10)+(1023&o)+65536):(t.push(r),n--)}else t.push(r)}return t}const m=e=>String.fromCodePoint(...e),h=function(e,t){return e+22+75*(e<26)-((0!=t)<<5)},p=function(e,t,n){let o=0;for(e=n?s(e/700):e>>1,e+=s(e/t);e>455;o+=r)e=s(e/35);return s(o+36*e/(e+38))},y=function(e){const t=[],n=e.length;let c=0,u=128,l=72,i=e.lastIndexOf("-");i<0&&(i=0);for(let n=0;n<i;++n)e.charCodeAt(n)>=128&&a("not-basic"),t.push(e.charCodeAt(n));for(let f=i>0?i+1:0;f<n;){let i=c;for(let t=1,u=r;;u+=r){f>=n&&a("invalid-input");const i=(d=e.charCodeAt(f++))-48<10?d-22:d-65<26?d-65:d-97<26?d-97:r;(i>=r||i>s((o-c)/t))&&a("overflow"),c+=i*t;const g=u<=l?1:u>=l+26?26:u-l;if(i<g)break;const m=r-g;t>s(o/m)&&a("overflow"),t*=m}const g=t.length+1;l=p(c-i,g,0==i),s(c/g)>o-u&&a("overflow"),u+=s(c/g),c%=g,t.splice(c++,0,u)}var d;return String.fromCodePoint(...t)},v=function(e){const t=[];let n=(e=g(e)).length,c=128,u=0,l=72;for(const n of e)n<128&&t.push(d(n));let i=t.length,f=i;for(i&&t.push("-");f<n;){let n=o;for(const t of e)t>=c&&t<n&&(n=t);const g=f+1;n-c>s((o-u)/g)&&a("overflow"),u+=(n-c)*g,c=n;for(const n of e)if(n<c&&++u>o&&a("overflow"),n==c){let e=u;for(let n=r;;n+=r){const o=n<=l?1:n>=l+26?26:n-l;if(e<o)break;const c=e-o,u=r-o;t.push(d(h(o+c%u,0))),e=s(c/u)}t.push(d(h(e,0))),l=p(u,g,f==i),u=0,++f}++u,++c}return t.join("")},M=function(e){return f(e,(function(e){return c.test(e)?y(e.slice(4).toLowerCase()):e}))},S=function(e){return f(e,(function(e){return u.test(e)?"xn--"+v(e):e}))},E={version:"2.1.0",ucs2:{decode:g,encode:m},decode:y,encode:v,toASCII:S,toUnicode:M};t.default=E},function(e,t,n){n.r(t),n.d(t,{addClass:function(){return d},addToArray:function(){return c},addUp:function(){return r},createElement:function(){return s},listen:function(){return i},log:function(){return u},months:function(){return f},properCase:function(){return o},sanitizeInput:function(){return a},select:function(){return l}});const o=e=>`${e[0].toUpperCase()}${e.slice(1).toLowerCase()}`,r=e=>{e.reduce(((e,t)=>t+e),0)},c=(e,t)=>(e.push(t),e),u=e=>{console.log(e)},l=(e,t)=>(t||document).querySelector(e),i=function(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.addEventListener(t,n,!!o)},s=(e,t)=>{const n=document.createElement(e);return t&&n.classList.add(t),n},d=(e,t,n)=>{(n||document).querySelector(e).classList.add(t)},a=e=>{const t=document.createElement("div");return t.textContent=e,t.innerHTML},f=["January","February","March","April","May","June","July","August","September","October","November","December"]}],t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){n.r(o);n(1),n(2);const e=document.getElementById("timers"),t=document.getElementById("grid-page"),r=document.querySelectorAll(".box"),c=document.querySelector(".age"),u=document.getElementById("named3"),l=document.getElementById("colorDisplay"),i=document.getElementById("showLength"),s=document.getElementById("newArr"),d=document.getElementById("convertedMiles"),a=document.querySelector(".top"),f=document.getElementById("milesToKilo"),g=document.getElementById("conv"),m=document.getElementById("showMe"),h=document.getElementById("kilos"),p=document.getElementById("kiloToMiles"),y=document.getElementById("showMiles"),v=document.querySelector(".topColor");let M,S,E;const I=[1,1,3,4,1,6,5,7,6],b=I.filter(((e,t)=>I.indexOf(e)===t));s.innerHTML=b;const C=new Date;e.innerHTML=C.toString(),r.forEach((e=>{t&&(e.style.color="#521B29")}));let L=[];const w=localStorage.getItem("stored");function x(){return null===localStorage.getItem("stored")?null===w&&(L.push("hsl(222, 62%, 42%)"),localStorage.setItem("stored",JSON.stringify(L))):(L=JSON.parse(localStorage.getItem("stored")),i.innerHTML=L.length),L}function T(){M=Math.floor(360*Math.random()).toString(),S=Math.floor(100*Math.random()).toString(),E=Math.floor(100*Math.random()).toString();const e=`hsl(${M}, ${S}%, ${E}%)`;var t;document.body.style.backgroundColor=e,l.innerHTML=e,u.style.backgroundColor=e,x(),t=e,L.push(t),localStorage.setItem("stored",JSON.stringify(L))}addEventListener("DOMContentLoaded",(()=>{(()=>{const e=C.getFullYear()-1950;c.innerHTML=e})(),T(),L.forEach((e=>{const t=`<li>${e}</li>`;m.insertAdjacentHTML("afterbegin",t)})),function(){const e=`rgb(${Math.floor(255*Math.random()).toString()},${Math.floor(255*Math.random()).toString()},${Math.floor(255*Math.random()).toString()})`;a.style.backgroundColor=e,v.innerHTML=e}()})),g.addEventListener("keyup",(e=>{e.preventDefault(),function(){let e=1.61*f.value;e=e.toFixed(2),d.innerHTML=`${e} Kilometers`}()})),h.addEventListener("keyup",(e=>{e.preventDefault(),function(){let e=.6213712*p.value;e=e.toFixed(2),y.innerHTML=`${e} Miles`}()}))}()}();
//# sourceMappingURL=grid-dist.js.map