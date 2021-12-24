/**
 * @format
 * @description js file for the taxonomy page
 * @type {[type]}
 */

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
const removal = document.getElementById('removal');
const display = document.querySelector('.displayArray');
// const make = document.querySelector('.make');
const take = document.querySelector('.take');
const today = document.getElementById('today');

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// 	.then((response) => response.json())
// 	.then((json) => console.log(json));

// const LoadData = async () => {
// 	const url = 'https://jsonplaceholder.typicode.com/users';
// 	const res = await fetch(url);
// 	const data = await res.json();
// 	console.log(data);
// };
// LoadData();

const url = location.href;
locate.innerHTML = url;

/**
 *  @description creates a random rgb color
 *  @return {string} RGB color
 */
function rgb() {
	const r = Math.floor(Math.random() * 255).toString();
	const g = Math.floor(Math.random() * 255).toString();
	const b = Math.floor(Math.random() * 255).toString();
	const created = `rgb(${r},${g},${b})`;
	tax.style.backgroundColor = created;
	taxColor.innerHTML = created;
}
const myVar = setInterval(myTimer, 1000);
function myTimer() {
	const d = new Date();
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
	// this highlights the current active link
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
let theArray = ['one', 'two', 'three', '56', '21', 'second'];
function showArr() {
	display.innerHTML = theArray;
}

addEventListener('DOMContentLoaded', () => {
	rgb();
	showArr();
});

/**
 *  @description detect input, determine if it meets a regex, add or remove a class depending on
 *  @param  {string} 'input' [description]
 *  @param  {event} (e      [description]
 *  @return {[type]}         [description]
 */
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

function showIt(resp) {
	display.innerHTML = resp;
}
// removal, display, make, take
removal.addEventListener('submit', (e) => {
	e.preventDefault();
	const make = document.querySelector('.make').value;
	theArray.push(make);
	showIt(theArray);
	document.querySelector('.make').value = '';
});

removal.addEventListener('submit', (e) => {
	e.preventDefault();
	const val = document.querySelector('.take').value;
	theArray = theArray.filter((item) => item !== val);
	showIt(theArray);
	document.querySelector('.take').value = '';
});

const now = new Date();
today.innerHTML = now.toDateString();
