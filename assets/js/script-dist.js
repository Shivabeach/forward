"use strict";const item1=document.querySelector(".item-1"),item2=document.querySelector(".item-2"),item3=document.querySelector(".item-3"),item4=document.querySelector(".item-4"),item5=document.querySelector(".item-5"),date=document.getElementById("date"),title=document.getElementById("title"),content=document.getElementById("content"),tag=document.getElementById("tags"),blogger=document.getElementById("blogger"),prime=document.getElementById("primeKeys"),error=document.getElementById("error"),three=document.getElementById("three"),copyr=document.querySelector(".copyr"),div30=document.querySelector(".div30"),distance=document.getElementById("distance"),place=document.getElementById("place"),str="Home",item11=str.link("http://forward/");item1.innerHTML=item11;const str1="Forms",item22=str1.link("http://forward/forms");item2.innerHTML=item22;const str2="General Health",item33=str2.link("http://forward/pages/health");item3.innerHTML=item33;const str3="Statistics",item44=str3.link("http://forward/pages/grids");item4.innerHTML=item44;const str4="Grid",item55=str4.link("http://forward/pages/learn");item5.innerHTML=item55;for(let e=0;e<document.links.length;e++)document.links[e].href==document.URL&&(document.links[e].className="current");let keys=document.querySelector(".blog--keys");if(null!==keys){keys.textContent.split(",").forEach((function(e){const t=`<p class="ital">${e}</p>`;keys.insertAdjacentHTML("afterbegin",t)}))}const tags=document.querySelectorAll(".tags");tags.forEach((function(e){"Positive"===e.textContent?(e.style.backgroundColor="#ffff00",e.style.color="#000"):(e.style.backgroundColor="#ff0000",e.style.color="#fff")}));const tagg=document.querySelectorAll(".tags");tagg.forEach((function(e){"Positive"===e.textContent?(e.style.backgroundColor="#ffff00",e.style.color="#000"):(e.style.backgroundColor="#ff0000",e.style.color="#fff")})),null!=blogger&&blogger.addEventListener("click",(e=>{let t=[];""!==date.value&&null!==date.value||(t.push("Date cannot be empty"),date.style.border="3px solid #ff0000"),title.value<=6&&(t.push("Fill out the title"),title.style.border="3px solid #ff0000"),content.value<=15&&(t.push("a total lack of content"),content.style.border="3px solid #ff0000"),""!==tags.value&&null!==tags.value||(t.push("Need a Positive or Negative"),tags.style.border="3px solid #ff0000"),prime.value<=6&&(t.push("Need some guiding words"),prime.style.border="3px solid #ff0000"),t.length>0&&(e.preventDefault(),error.innerText=t.join(", "))}));const para=document.createElement("p"),textual="This is completely about my weight";para.append(textual),null!=three&&three.append(para);let yer=new Date;function prints(e){var t=document.querySelector(".parent").innerHTML,n=document.body.innerHTML;document.body.innerHTML=t,window.print(),document.body.innerHTML=n}null!=copyr&&(copyr.innerHTML=`©2019 - ${yer.getFullYear()}`),$((function(){$("#weight").on("submit",(function(e){e.preventDefault();var t=$(this),n=t.attr("action"),r=t.attr("method"),o={};return t.find("[name]").each((function(e,t){var n=$(this),r=n.attr("name");t=n.val();o[r]=t})),$.ajax({url:n,type:r,data:o,success:function(e){$("#display").html(e).delay(6e3).fadeOut(1e3)}}),!1}))})),$((function(){$("#weights").on("submit",(function(e){e.preventDefault();var t=$(this),n=t.attr("action"),r=t.attr("method"),o={};return t.find("[name]").each((function(e,t){var n=$(this),r=n.attr("name");t=n.val();o[r]=t})),$.ajax({url:n,type:r,data:o,success:function(e){$("#display").html(e).delay(6e3).fadeOut(1e3)}}),!1}))}));
//# sourceMappingURL=script-dist.js.map