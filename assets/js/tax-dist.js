!function(){const e=document.getElementById("tax"),t=document.getElementById("taxColor"),n=document.getElementById("demo12"),o=document.querySelector(".reg"),r=document.getElementById("isItTrue"),a=document.getElementById("location"),c=document.getElementById("removal"),d=document.querySelector(".displayArray"),u=(document.querySelector(".make"),document.querySelector(".take"),document.getElementById("today")),l=location.href;a.innerHTML=l;setInterval((function(){const e=new Date;n.innerHTML=e.toLocaleTimeString()}),1e3);for(let e=0;e<document.links.length;e++)document.links[e].href==document.URL&&(document.links[e].className="current");let m=["one","two","three","56","21","second"];function i(e){d.innerHTML=e}addEventListener("DOMContentLoaded",(()=>{!function(){const n=`rgb(${Math.floor(255*Math.random()).toString()},${Math.floor(255*Math.random()).toString()},${Math.floor(255*Math.random()).toString()})`;e.style.backgroundColor=n,t.innerHTML=n}(),d.innerHTML=m})),o.addEventListener("input",(e=>{const t=e.target.value,n=/(\w){4,}/g.test(t);n?(r.innerText=n,o.classList.add("yes")):(r.innerText=n,o.classList.remove("yes"))})),c.addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector(".make").value;m.push(t),i(m),document.querySelector(".make").value=""})),c.addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector(".take").value;m=m.filter((e=>e!==t)),i(m),document.querySelector(".take").value=""}));const s=new Date;u.innerHTML=s.toDateString()}();