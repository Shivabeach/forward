!function(){"use strict";var e=[,function(e,t,n){n.r(t),n.d(t,{addClass:function(){return a},addToArray:function(){return u},addUp:function(){return r},createElement:function(){return i},listen:function(){return d},log:function(){return c},months:function(){return m},properCase:function(){return o},sanitizeInput:function(){return s},select:function(){return l}});const o=e=>`${e[0].toUpperCase()}${e.slice(1).toLowerCase()}`,r=e=>{e.reduce(((e,t)=>t+e),0)},u=(e,t)=>(e.push(t),e),c=e=>{console.log(e)},l=(e,t)=>(t||document).querySelector(e),d=function(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.addEventListener(t,n,!!o)},i=(e,t)=>{const n=document.createElement(e);return t&&n.classList.add(t),n},a=(e,t,n)=>{(n||document).querySelector(e).classList.add(t)},s=e=>{const t=document.createElement("div");return t.textContent=e,t.innerHTML},m=["January","February","March","April","May","June","July","August","September","October","November","December"]}],t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var u=t[o]={exports:{}};return e[o](u,u.exports,n),u.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){n.r(o);n(1);const e=document.getElementById("timers"),t=document.getElementById("grid-page"),r=document.querySelectorAll(".box"),u=document.querySelector(".age"),c=(document.getElementById("named3"),document.getElementById("colorDisplay"),document.getElementById("showLength"),document.getElementById("newArr")),l=document.getElementById("convertedMiles"),d=document.querySelector(".top"),i=document.getElementById("milesToKilo"),a=document.getElementById("conv"),s=document.getElementById("showMe"),m=document.getElementById("kilos"),f=document.getElementById("kiloToMiles"),y=document.getElementById("showMiles"),g=document.querySelector(".topColor");const p=[1,1,3,4,1,6,5,7,6],M=p.filter(((e,t)=>p.indexOf(e)===t));c.innerHTML=M;const E=new Date;e.innerHTML=E.toString(),r.forEach((e=>{t&&(e.style.color="#521B29")}));let v=[];localStorage.getItem("stored");addEventListener("DOMContentLoaded",(()=>{(()=>{const e=E.getFullYear()-1950;u.innerHTML=e})(),v.forEach(((e,t)=>{const n=`<li>${e}</li>`;s.insertAdjacentHTML("afterbegin",n)})),function(){const e=`rgb(${Math.floor(255*Math.random()).toString()},${Math.floor(255*Math.random()).toString()},${Math.floor(255*Math.random()).toString()})`;d.style.backgroundColor=e,g.innerHTML=e}()})),a.addEventListener("keyup",(e=>{e.preventDefault(),function(){let e=1.61*i.value;e=e.toFixed(2),l.innerHTML=`${e} Kilometers`}()})),m.addEventListener("keyup",(e=>{e.preventDefault(),function(){let e=.6213712*f.value;e=e.toFixed(2),y.innerHTML=`${e} Miles`}()}))}()}();
//# sourceMappingURL=grid-dist.js.map