!function(){const e=document.querySelector(".item-1"),t=document.querySelector(".item-2"),n=document.querySelector(".item-3"),o=document.querySelector(".item-4"),l=document.querySelector(".item-5"),r=document.querySelector(".item-6"),c=document.querySelector(".item-7"),s=document.querySelector(".item-8"),d=document.getElementById("date"),i=document.getElementById("title"),u=document.getElementById("content"),a=document.getElementById("blogger"),m=document.getElementById("primeKeys"),f=document.getElementById("error"),y=document.getElementById("three"),p=document.querySelector(".copyr"),g=document.getElementById("one"),h=document.getElementById("demo12");if(g){const e=new Date,t=new Intl.DateTimeFormat("en-us",{dateStyle:"full"});g.innerHTML=t.format(e)}setInterval((function(){const e=new Date;h.innerHTML=e.toLocaleTimeString()}),1e3);const k="Home".link("http://forward/");e.innerHTML=k;const S="Forms".link("http://forward/forms");t.innerHTML=S;const T="General Health".link("http://forward/pages/health");n.innerHTML=T;const L="Taxonomy".link("http://forward/pages/taxes");o.innerHTML=L;const b="Grid".link("http://forward/pages/learn");l.innerHTML=b;const v="2021 Stats".link("http://forward/pages/grids");r.innerHTML=v;const w="2022 Stats".link("http://forward/pages/grid22");c.innerHTML=w;const E="2023 Stats".link("http://forward/pages/grid23");s.innerHTML=E;for(let e=0;e<document.links.length;e++)document.links[e].href===document.URL&&(document.links[e].className="current");const H=document.querySelector(".blog--keys");if(null!==H){H.textContent.split(",").forEach((e=>{const t=`<p class="ital">${e}</p>`;H.insertAdjacentHTML("afterbegin",t)}))}const q=document.querySelectorAll(".tags");q.forEach((e=>{"Positive"===e.textContent?(e.style.backgroundColor="#ffff00",e.style.color="#000"):(e.style.backgroundColor="#ff0000",e.style.color="#fff")}));document.querySelectorAll(".tags").forEach((e=>{"Positive"===e.textContent?(e.style.backgroundColor="#ffff00",e.style.color="#000"):(e.style.backgroundColor="#ff0000",e.style.color="#fff")})),null!=a&&a.addEventListener("click",(e=>{const t=[];""!==d.value&&null!==d.value||(t.push("Date cannot be empty"),d.style.border="3px solid #ff0000"),i.value<=6&&(t.push("Fill out the title"),i.style.border="3px solid #ff0000"),u.value<=15&&(t.push("a total lack of content"),u.style.border="3px solid #ff0000"),""!==q.value&&null!==q.value||(t.push("Need a Positive or Negative"),q.style.border="3px solid #ff0000"),m.value<=6&&(t.push("Need some guiding words"),m.style.border="3px solid #ff0000"),t.length>0&&(e.preventDefault(),f.innerText=t.join(", "))}));const M=document.createElement("p");M.append("This is completely about my weight"),null!=y&&y.append(M);const x=new Date;null!=p&&(p.innerHTML=`©2019 - ${x.getFullYear()}`)}();
//# sourceMappingURL=script-dist.js.map