/** @format */
const tax = document.getElementById('tax');
const taxColor = document.getElementById('taxColor');
const item1 = document.querySelector('.item-1');
const item2 = document.querySelector('.item-2');
const item3 = document.querySelector('.item-3');
const item4 = document.querySelector('.item-4');
const item5 = document.querySelector('.item-5');
const item6 = document.querySelector('.item-6');
const demo = document.getElementById('demo12');
const reg = document.querySelector('.reg');
const isItTrue = document.getElementById('isItTrue');
const locate = document.getElementById('location');

const url = location.href;
locate.innerHTML = url;

function rgb() {
	let r = Math.floor(Math.random() * 255).toString();
	let g = Math.floor(Math.random() * 255).toString();
	let b = Math.floor(Math.random() * 255).toString();
	let created = `rgb(${r},${g},${b})`;
	tax.style.backgroundColor = created;
	taxColor.innerHTML = created;
}
var myVar = setInterval(myTimer, 1000);
function myTimer() {
	var d = new Date();
	demo.innerHTML = d.toLocaleTimeString();
}
const str = 'Home';
const item11 = str.link('http://forward/');
item1.innerHTML = item11;

const str1 = 'Forms';
const item22 = str1.link('http://forward/forms');
item2.innerHTML = item22;

const str2 = 'General Health';
const item33 = str2.link('http://forward/pages/health');
item3.innerHTML = item33;

const str3 = 'Statistics';
const item44 = str3.link('http://forward/pages/grids');
item4.innerHTML = item44;

const str4 = 'Grid';
const item55 = str4.link('http://forward/pages/learn');
item5.innerHTML = item55;

const str5 = 'Taxonomy';
const item66 = str5.link('http://forward/pages/taxes');
item6.innerHTML = item66;

for (let i = 0; i < document.links.length; i++) {
	//this highlights the current active link
	if (document.links[i].href == document.URL) {
		document.links[i].className = 'current';
	}
}

// function regexe(e) {
// 	const string = reg.value;
// 	console.log(string);
// 	const regex = /(\w){2,12}/g;
// 	const exists = regex.test(string);
// 	if (exists) {
// 		isItTrue.innerText = exists;
// 	} else {
// 		isItTrue.innerText = exists;
// 	}
// }

addEventListener('DOMContentLoaded', () => {
	rgb();
});

// detect input, determine if it meets a regex, add or remove a class depending on

reg.addEventListener('input', (e) => {
	const stringValue = e.target.value;
	const regex = /(\w){4,}/g;
	const exists = regex.test(stringValue);
	if (!exists) {
		isItTrue.innerText = exists;
		reg.classList.remove('yes');
	} else {
		isItTrue.innerText = exists;
		reg.classList.add('yes');
	}
});
