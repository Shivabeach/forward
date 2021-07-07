/** @format */

'use strict';
import { properCase, log, listen, addToArray, addUp } from './utils.js';
// log(properCase('evil'));
const item4 = document.querySelector('.item-4');
const steps = document.querySelectorAll('.steps');
const miles = document.querySelectorAll('.miles');
const sleep = document.querySelectorAll('.sleep');
const calories = document.querySelectorAll('.calorie');
const exercise = document.querySelectorAll('.exercise');
const spans = document.getElementsByTagName('span');
const stepss = document.getElementsByClassName('steps');
const posi = document.getElementById('posi');
const neggy = document.getElementById('neggy');
const mstep = document.querySelectorAll('.step');
const pos = document.querySelector('.pos');
const neg = document.querySelectorAll('.neg');
const miliess = document.getElementById('milies');

const fitMiles = {
	milesAll: miles.textContent,
};

//console.log(mstep);
// let arr = [];
// mstep.forEach(function(many) {
// 	let numm = Number(many.firstElementChild.firstChild.nodeValue);
// 	arr.push(numm);
// 	console.log(numm);
// });
const miiles = [19, 17, 17, 13, 14, 16, 15, 15, 16];
const posit = [0, 3, 1, 3, 4, 2, 4, 4];
const nega = [5, 2, 4, 2, 1, 3, 1, 1];

const walking = miiles.reduce((acc, cur) => acc + cur, 0);
miliess.innerHTML = `${walking} Miles walked`;

const maxine = posit.reduce((acc, cur) => acc + cur, 0);
posi.innerHTML = `${maxine} Positive`;

const negatory = nega.reduce((acc, cur) => acc + cur, 0);
neggy.innerHTML = `${negatory} Negative`;

steps.forEach(function(stepp) {
	if (stepp.textContent < 0) {
		stepp.classList.add('highe');
	} else {
		stepp.classList.add('gen7');
	}
});

miles.forEach(function(mile) {
	if (mile.textContent < 0) {
		mile.classList.add('highe');
	} else {
		mile.classList.add('gen7');
	}
});

sleep.forEach(function(sleeps) {
	if (sleeps.textContent < 0) {
		sleeps.classList.add('highe');
	} else {
		sleeps.classList.add('gen7');
	}
});

calories.forEach(function(calorie) {
	if (calorie.textContent < 0) {
		calorie.classList.add('highe');
	} else {
		calorie.classList.add('gen7');
	}
});

exercise.forEach(function(exer) {
	if (exer.textContent < 0) {
		exer.classList.add('highe');
	} else {
		exer.classList.add('gen7');
	}
});
