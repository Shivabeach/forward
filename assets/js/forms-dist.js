"use strict";const date1=document.getElementById("date1"),dates=document.querySelector(".dates");let errors;console.log(date1.textContent),document.querySelector("#content").addEventListener("keyup",(function(){let e=[];this.value.replace(/[\t\n\r\.\?\!]/gm," ").split(" ").map((t=>{let n=t.trim();n.length>0&&e.push(n)})),document.querySelector("#counted").value=e.length})),blogger.addEventListener("click",(e=>{blogger.innerHTML="Submitted"})),date1.addEventListener("focusout",(function(){null!==date1&&""!==date1||(dates.innerHTML="Date must be entered")})),errors=null===date1||""===date1;