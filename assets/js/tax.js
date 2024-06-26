/**
 * @format
 * @description js file for the taxonomy page
 * @type {[type]}
 */

const tax = document.getElementById('tax');
const taxColor = document.getElementById('taxColor');

const demo = document.getElementById('demo12');
const reg = document.querySelector('.reg');
const isItTrue = document.getElementById('isItTrue');
const locate = document.getElementById('location');
const removal = document.getElementById('removal');
const display = document.querySelector('.displayArray');
const make = document.querySelector('.make');
const take = document.querySelector('.take');
const today = document.getElementById('today');

// fetch('https://jsonplaceholder.typicode.com/todos/4')
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

const foods = [
	{
		type: 'meat',
		name: 'Chicken Breast',
		Size: 3,
		Calories: 185,
		fat: 9.9,
		Carbs: 0,
		Cholesterol: 72,
		Potassium: 182,
		Protein: 37,
	},
];
