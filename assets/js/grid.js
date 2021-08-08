/** @format */
'use strict';
//1.609344
import { properCase, log, listen } from './utils.js';
const timers = document.getElementById('timers');
const gridpage = document.getElementById('grid-page');
const box = document.querySelectorAll('.box');
const gridly = document.getElementById('gridly');
const dogs = document.querySelector('.dogs');
const age = document.querySelector('.age');

const date = new Date();
timers.innerHTML = date.toString();

box.forEach(function(boxes) {
	if (gridpage) {
		boxes.style.color = '#521B29';
	}
});

const getAge = () => {
	const date = new Date();
	const currentYear = date.getFullYear();
	const birthYear = 1950;
	const currentAge = currentYear - birthYear;
	age.innerHTML = currentAge;
};

addEventListener('DOMContentLoaded', () => {
	getAge();
});

// async function user() {
// 	const response = await fetch('https://jsonplaceholder.typicode.com/users/');
// 	const data = await response.json();
// 	console.log(data);
// 	createUsers(data);
// }
// user();

// function createUsers(users) {
// 	dogs.innerHTML = `
// 		<ul>
// 		${Object.keys(users)
// 			.map(function(name) {
// 				return `<li> ${name.company} </li>`;
// 			})
// 			.join('')}
// 		</ul>
// 	`;
// }
