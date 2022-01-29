!function(){"use strict";var e=[,function(e,t,n){n.r(t),n.d(t,{properCase:function(){return o},addUp:function(){return r},addToArray:function(){return l},log:function(){return c},select:function(){return u},listen:function(){return d},createElement:function(){return i},addClass:function(){return s},sanitizeInput:function(){return a},months:function(){return m}});const o=e=>`${e[0].toUpperCase()}${e.slice(1).toLowerCase()}`,r=e=>{e.reduce(((e,t)=>t+e),0)},l=(e,t)=>(e.push(t),e),c=e=>{console.log(e)},u=(e,t)=>(t||document).querySelector(e),d=function(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.addEventListener(t,n,!!o)},i=(e,t)=>{const n=document.createElement(e);return t&&n.classList.add(t),n},s=(e,t,n)=>{(n||document).querySelector(e).classList.add(t)},a=e=>{const t=document.createElement("div");return t.textContent=e,t.innerHTML},m=["January","February","March","April","May","June","July","August","September","October","November","December"]}],t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){n.r(o);n(1);const e=document.querySelectorAll(".steps"),t=document.querySelectorAll(".miles"),r=document.querySelectorAll(".sleep"),l=document.querySelectorAll(".calorie"),c=document.querySelectorAll(".exercise"),u=document.querySelectorAll(".step"),d=document.querySelectorAll(".neg"),i=document.querySelectorAll(".cal"),s=document.querySelectorAll(".miles1"),a=document.querySelectorAll(".may"),m=document.querySelectorAll(".june"),h=document.querySelectorAll(".july"),f=document.querySelectorAll(".aug"),g=document.querySelectorAll(".septem"),y=document.querySelectorAll(".octob"),E=document.querySelectorAll(".octoHeart"),p=document.querySelectorAll(".novob"),M=document.querySelectorAll(".novHeart"),L=document.querySelectorAll(".decHeart"),C=document.querySelectorAll(".decmile"),S=document.querySelectorAll(".ex");console.log(S);const b=document.getElementById("posi"),v=document.getElementById("neggy"),A=document.getElementById("steppen"),H=document.getElementById("burned"),T=document.getElementById("mayMiles"),$=document.getElementById("juneMiles"),B=document.getElementById("colorDisplay"),I=document.getElementById("julyMiles"),q=document.getElementById("augMiles"),x=document.getElementById("septMiles"),N=document.getElementById("octMiles"),V=document.getElementById("octRate"),k=document.getElementById("novMiles"),w=document.getElementById("novRate"),j=document.getElementById("decMiles"),F=document.getElementById("decRate"),O=(document.getElementById("decAverage"),document.querySelectorAll(".pos")),U=document.getElementById("exer"),P=document.querySelector(".inline-list"),D=[],J=[],R=[],_=[],z=[];let G,K,Q;const W=[],X=[];e.forEach((e=>{e.textContent<0?e.classList.add("highe"):e.classList.add("gen7")})),t.forEach((e=>{e.textContent<0?e.classList.add("highe"):e.classList.add("gen7")})),r.forEach((e=>{e.textContent<0?e.classList.add("highe"):e.classList.add("gen7")})),l.forEach((e=>{e.textContent<0?e.classList.add("highe"):e.classList.add("gen7")})),c.forEach((e=>{e.textContent<0?e.classList.add("highe"):e.classList.add("gen7")})),addEventListener("DOMContentLoaded",(()=>{!function(){u.forEach((e=>{const t=e.firstElementChild.firstChild.nodeValue;J.push(t)}));const e=J.map(Number).reduce(((e,t)=>e+t),0).toLocaleString("en-US");A.innerHTML=`${e} Steps taken`}(),function(){i.forEach((e=>{const t=e.firstElementChild.firstChild.nodeValue;D.push(t)}));const e=D.map(Number).reduce(((e,t)=>e+t),0).toLocaleString("en-US");H.innerHTML=`${e} Calories Burned`}(),function(){s.forEach((e=>{const t=e.firstElementChild.firstChild.nodeValue;R.push(t)}));const e=R.map(Number).reduce(((e,t)=>e+t),0);milies.innerHTML=`${e} Miles walked`}(),function(){const e=[];S.forEach((t=>{const n=t.firstElementChild.firstChild.nodeValue;e.push(n)}));const t=e.map(Number).reduce(((e,t)=>e+t),0).toLocaleString("en-US");U.innerHTML=`${t} days exercising`}(),function(){a.forEach((e=>{const t=e.firstElementChild.firstChild.nodeValue;_.push(t)}));const e=_.map(Number).reduce(((e,t)=>e+t),0);T.innerHTML=`${e} Miles walked`}(),function(){m.forEach((e=>{const t=e.firstElementChild.firstChild.nodeValue;z.push(t)}));const e=z.map(Number),t=e.reduce(((e,t)=>e+t),0);$.innerHTML=`${t} Miles walked`;const n=(t/e.length).toFixed(2);document.getElementById("juneAv").innerHTML=`${n} average miles`}(),function(){G=Math.floor(360*Math.random()).toString(),K=Math.floor(100*Math.random()).toString(),Q=Math.floor(100*Math.random()).toString();const e=`hsl(${G}, ${K}%, ${Q}%)`;document.body.style.backgroundColor=e,B.innerHTML=e,P.style.backgroundColor=e}(),function(){O.forEach((e=>{const t=e.textContent;W.push(t)}));const e=W.map(Number).reduce(((e,t)=>e+t),0).toLocaleString("en-US");b.innerHTML=`${e} Positive!`}(),function(){const e=[];d.forEach((t=>{const n=t.textContent;e.push(n)}));const t=e.map(Number).reduce(((e,t)=>e+t),0).toLocaleString("en-US");v.innerHTML=`${t} Negative`}(),function(){const e=[];h.forEach((t=>{const n=t.firstElementChild.firstChild.nodeValue;e.push(n)}));const t=e.map(Number),n=t.reduce(((e,t)=>e+t),0),o=n/t.length;I.innerHTML=`${n} Miles walked`,document.getElementById("julyAverage").innerHTML=`${o} average miles`}(),function(){const e=[];f.forEach((t=>{const n=t.firstElementChild.firstChild.nodeValue;e.push(n)}));const t=e.map(Number),n=t.reduce(((e,t)=>e+t),0);q.innerHTML=`${n} Miles walked`;const o=(n/t.length).toFixed(2);document.getElementById("augAverage").innerHTML=`${o} average miles`}(),function(){const e=[];g.forEach((t=>{const n=t.firstElementChild.firstChild.nodeValue;e.push(n)}));const t=e.map(Number),n=t.reduce(((e,t)=>e+t),0);x.innerHTML=`${n} Miles walked`;const o=(n/t.length).toFixed(2);document.getElementById("septAverage").innerHTML=`${o} average miles`}(),function(){y.forEach((e=>{const t=e.firstElementChild.firstChild.nodeValue;X.push(t)}));const e=X.map(Number),t=e.reduce(((e,t)=>e+t),0);N.innerHTML=`${t} Miles walked`;const n=(t/e.length).toFixed(2);document.getElementById("octAverage").innerHTML=`${n} average miles`}(),function(){const e=[];E.forEach((t=>{const n=t.firstElementChild.firstChild.nodeValue;e.push(n)}));const t=e.map(Number),n=(t.reduce(((e,t)=>e+t),0)/t.length).toFixed(2);V.innerHTML=`${n} Heart rate`}(),function(){const e=[];p.forEach((t=>{const n=t.firstElementChild.firstChild.nodeValue;e.push(n)}));const t=e.map(Number),n=t.reduce(((e,t)=>e+t),0);k.innerHTML=`${n} Miles walked`;const o=(n/t.length).toFixed(2);document.getElementById("novAverage").innerHTML=`${o} average miles`}(),function(){const e=[];M.forEach((t=>{const n=t.firstElementChild.firstChild.nodeValue;e.push(n)}));const t=e.map(Number),n=(t.reduce(((e,t)=>e+t),0)/t.length).toFixed(2);w.innerHTML=`${n} Heart rate`}(),function(){const e=[];C.forEach((t=>{const n=t.firstElementChild.firstChild.nodeValue;e.push(n)}));const t=e.map(Number),n=t.reduce(((e,t)=>e+t),0);j.innerHTML=`${n} Miles walked`;const o=(n/t.length).toFixed(2);document.getElementById("decAverage").innerHTML=`${o} average miles`}(),function(){const e=[];L.forEach((t=>{const n=t.firstElementChild.firstChild.nodeValue;e.push(n)}));const t=e.map(Number),n=(t.reduce(((e,t)=>e+t),0)/t.length).toFixed(2);F.innerHTML=`${n} Heart rate`}()}))}()}();
//# sourceMappingURL=stats-dist.js.map