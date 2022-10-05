/** @format */

// 1.609344
// 1 * 0.6213712 kph to mph
import { toUnicode } from 'punycode';
import { properCase, log, listen, months } from './utils.js';

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
const conv = document.getElementById('conv');
const showMe = document.getElementById('showMe');
const kilos = document.getElementById('kilos');
const kiloToMiles = document.getElementById('kiloToMiles');
const showMiles = document.getElementById('showMiles');
const topColor = document.querySelector('.topColor');
const M_TO_KILO = 0.6213712;
const K_TO_MILES = 1.61;
let h;
let s;
let l;

// filter example to remove duplicates in arrays
const array1 = [1, 1, 3, 4, 1, 6, 5, 7, 6];
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
box.forEach((boxes) => {
	if (gridpage) {
		boxes.style.color = '#521B29';
	}
});

const getAge = () => {
	const currentYear = date.getFullYear();
	const birthYear = 1950;
	const currentAge = currentYear - birthYear;
	age.innerHTML = currentAge;
};
//----------------------------------------
// Colors. Checks the storage. If empty add choco. If not empty parse the input
//-----------------------------------------
let colors = [];
const retrieve = localStorage.getItem('stored');
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
//? display the color
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
addEventListener('DOMContentLoaded', () => {
	getAge();
	createColor();
	displayArr();
	rgb();
});

conv.addEventListener('keyup', (e) => {
	e.preventDefault();
	convertsMToK();
});
kilos.addEventListener('keyup', (e) => {
	e.preventDefault();
	convertKToM();
});
