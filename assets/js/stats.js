/** @format */

'use strict';
import { properCase, log, listen, addToArray } from './utils.js';
// log(properCase('evil'));
const item4 = document.querySelector('.item-4');
const steps = document.querySelectorAll('.steps');
const miles = document.querySelectorAll('.miles');
const sleep = document.querySelectorAll('.sleep');
const calories = document.querySelectorAll('.calorie');
const exercise = document.querySelectorAll('.exercise');
const spans = document.getElementsByTagName('span');
const stepss = document.getElementsByClassName('steps');
//console.log(stepps);
// function add() {
// 	return document.getElementsByTagName('span').innerHTML;
// }
//log(steps.innerText);

let stuff = {
	steps: steps,
	miles: miles,
	sleep: sleep,
	calories: calories,
	exercise: exercise,
};
console.log(stuff);
log(stuff.steps);
let steppers = [];

// steppers.push(stepps);
// log(steppers);

// function alertMe() {
// 	alert('Help');
// }
// listen(item4, 'click', alertMe);
