/** @format */

// 1.609344
// 1 * 0.6213712 kph to mph
// import { listen, log, months, properCase } from './utils.js';

/* for calculations */
const number1 = document.querySelector('.no1');
const number2 = document.querySelector('.no2');
const click = document.querySelector('.click');
const calculated = document.querySelector('.calculated');

const timers = document.getElementById('timers');
const gridpage = document.getElementById('grid-page');
const box = document.querySelectorAll('.box');
// const gridly = document.getElementById('gridly');
// const dogs = document.querySelector('.dogs');
const age = document.querySelector('.age');
const name5 = document.getElementById('named3');
const colorDisplay = document.getElementById('colorDisplay');
const showLength = document.getElementById('showLength');
const newArr = document.getElementById('newArr');
const convertedMiles = document.getElementById('convertedMiles');
const topper = document.querySelector('.top');
const milesToKilo = document.getElementById('milesToKilo');
// const conv = document.getElementById('conv');
const showMe = document.getElementById('showMe');
// const kilos = document.getElementById('kilos');
const kiloToMiles = document.getElementById('kiloToMiles');
const showMiles = document.getElementById('showMiles');
const topColor = document.querySelector('.topColor');
const M_TO_KILO = 0.6213712;
const K_TO_MILES = 1.61;
let h;
let s;
let l;

// filter example to remove duplicates in arrays
const array1 = [1, 1, 3, 3, 4, 1, 6, 5, 7, 6];
const newArray = array1.filter((num, i) => array1.indexOf(num) === i);
newArr.innerHTML = newArray;

// const average = (...args) => args.reduce((a, b) => a + b) / args.length;
// average(1, 2, 3, 4);

// console.log(months.length);
const date = new Date();
timers.innerHTML = date.toString();

/**
 *  [description]
 *  @param  {String} boxes) {	if         (gridpage) {		boxes.style.color [description]
 *  @return {[type]}        [description]
 */
// Apply a specific color to all elements with the class `.box`
// if they exist and the `gridpage` element is present in the DOM.
if (box && box.length > 0) {
	box.forEach((box) => {
		if (gridpage) {
			box.style.color = '#521B29';
		}
	});
}

const getAge = () => {
	const currentYear = date.getFullYear();
	const birthYear = 1950;
	const currentAge = currentYear - birthYear;
	age.innerHTML = currentAge;
};
getAge();
//----------------------------------------
// Colors. Checks the storage. If empty add choco. If not empty parse the input
//-----------------------------------------
let colors = [];
const retrieve = localStorage.getItem('stored');

/**
 * @description
 * @author Brad
 * @date 2022-11-30
 */
function getStore() {
	const choco = 'hsl(222, 62%, 42%)';
	if (retrieve === null) {
		colors.push(choco);
		localStorage.setItem('stored', JSON.stringify(colors));
	}
}

// const alphaSort = (array) => {
// 	if (!array.length) return;
// 	return array.sort();
// };

function getStorage() {
	if (localStorage.getItem('stored') === null) {
		getStore();
	} else {
		colors = JSON.parse(localStorage.getItem('stored'));
		showLength.innerHTML = colors.length;
	}
	return colors;
}

function pusher(added) {
	colors.push(added);
	localStorage.setItem('stored', JSON.stringify(colors));
}
// ? display the color
function displayArr() {
	colors.forEach((mov) => {
		const html = `<li>${mov}</li>`;
		showMe.insertAdjacentHTML('afterbegin', html);
	});
}

// insert here

function createColor() {
	h = Math.floor(Math.random() * 360).toString();
	s = Math.floor(Math.random() * 100).toString();
	l = Math.floor(Math.random() * 100).toString();
	const col = `hsl(${h}, ${s}%, ${l}%)`;
	document.body.style.backgroundColor = col;
	colorDisplay.innerHTML = col;
	name5.style.backgroundColor = col;
	getStorage(col);
	pusher(col);
}

function rgb() {
	const r = Math.floor(Math.random() * 255).toString();
	const g = Math.floor(Math.random() * 255).toString();
	const b = Math.floor(Math.random() * 255).toString();
	const created = `rgb(${r},${g},${b})`;
	topper.style.backgroundColor = created;
	topColor.innerHTML = created;
}
function convertsMToK() {
	let converting = milesToKilo.value * K_TO_MILES;
	converting = converting.toFixed(2);
	convertedMiles.innerHTML = `${converting} Kilometers`;
}
function convertKToM() {
	let converting = kiloToMiles.value * M_TO_KILO;
	converting = converting.toFixed(2);
	showMiles.innerHTML = `${converting} Miles`;
}

/* 0.6213712 */
window.addEventListener('DOMContentLoaded', () => {
	getAge();
	createColor();
	displayArr();
	rgb();
});

milesToKilo.addEventListener('keyup', (e) => {
	e.preventDefault();
	convertsMToK();
});
kiloToMiles.addEventListener('keyup', (e) => {
	e.preventDefault();
	convertKToM();
});

function calculate() {
	const one = number1.value;
	const two = number2.value;
	const done = (one / two) * 100;
	calculated.innerText = `${done.toFixed(2)}%`;
}

click.addEventListener('click', (e) => {
	e.preventDefault();
	calculate();
});

// for (let i = 0; i < array1.length; i++) {
// 	const element = array1[i];
// 	console.log(element);
// }
window.addEventListener('DOMContentLoaded', () => {
	console.log('Loaded');
});
// const logs = document.querySelector('.event-log-contents');
// const reload = document.querySelector('#reload');

// reload.addEventListener('click', () => {
// 	logs.textContent = '';
// 	setTimeout(() => {
// 		window.location.reload(true);
// 	}, 200);
// });

// window.addEventListener('load', (event) => {
// 	logs.textContent += 'load\n';
// });

// document.addEventListener('readystatechange', (event) => {
// 	logs.textContent += `readystate: ${document.readyState}\n`;
// });

// document.addEventListener('DOMContentLoaded', (event) => {
// 	logs.textContent += 'DOMContentLoaded\n';
// });
