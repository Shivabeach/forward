/** @format */
// The stats JS page that calculates all values needed using querySelectorAll, arrays, toString and forEach.
'use strict';
// import { properCase, log, listen, addToArray, addUp } from './utils.js';
// log(properCase('evil'));

const steps = document.querySelectorAll('.steps');
const miles = document.querySelectorAll('.miles');
const sleep = document.querySelectorAll('.sleep');
const calories = document.querySelectorAll('.calorie');
const exercise = document.querySelectorAll('.exercise');
const mstep = document.querySelectorAll('.step');
const neg = document.querySelectorAll('.neg');
const cals = document.querySelectorAll('.cal');
const miles1 = document.querySelectorAll('.miles1');
const may = document.querySelectorAll('.may');
const june = document.querySelectorAll('.june');
const july = document.querySelectorAll('.july');

const posi = document.getElementById('posi');
const neggy = document.getElementById('neggy');
const miliess = document.getElementById('milies');
const steppen = document.getElementById('steppen');
const burned = document.getElementById('burned');
const mayMiles = document.getElementById('mayMiles');
const juneMiles = document.getElementById('juneMiles');
const colorDisplay = document.getElementById('colorDisplay');
const julyMiles = document.getElementById('julyMiles');
const pos = document.querySelectorAll('.pos');

//var commas = num.toLocaleString("en-US");
//arrays
let calArray = [];
let arr = [];
let miles2 = [];
let monthMay = [];
let monthJune = [];
let h, s, l;
let happy = [];
let negg = [];

//functions
//add up the positive numbers
function positiveNum() {
	pos.forEach(function(positives) {
		let positi = positives.textContent;
		happy.push(positi);
	});
	const toNumbers = happy.map(Number);
	const numb = toNumbers.reduce((acc, cum) => acc + cum, 0);
	const results = numb.toLocaleString('en-US');
	posi.innerHTML = `${results} Positive!`;
}
//add up the negative numbers
function negativeNum() {
	neg.forEach(function(negatives) {
		let nega = negatives.textContent;
		negg.push(nega);
	});
	const toNumbers = negg.map(Number);
	const numb = toNumbers.reduce((acc, cum) => acc + cum, 0);
	const results = numb.toLocaleString('en-US');
	neggy.innerHTML = `${results} Negative`;
}

//steps
function steppers() {
	//all classes of step
	mstep.forEach(function(many) {
		let numm = many.firstElementChild.firstChild.nodeValue;
		arr.push(numm);
	});
	const toNumbers = arr.map(Number);
	//reduce the numbers
	const walker = toNumbers.reduce((acc, cum) => acc + cum, 0);
	const results = walker.toLocaleString('en-US');
	steppen.innerHTML = `${results} Steps taken`;
}

//Calories burned
function calBurn() {
	cals.forEach(function(burny) {
		let burnCal = burny.firstElementChild.firstChild.nodeValue;
		calArray.push(burnCal);
	});
	const toNumber = calArray.map(Number);
	const burning = toNumber.reduce((acc, cum) => acc + cum, 0);
	const calBurn = burning.toLocaleString('en-US');
	burned.innerHTML = `${calBurn} Calories Burned`;
}
//Miles
function distance() {
	miles1.forEach(function(dist) {
		let milesWalk = dist.firstElementChild.firstChild.nodeValue;
		miles2.push(milesWalk);
	});
	const toNum = miles2.map(Number);
	const pain = toNum.reduce((acc, cum) => acc + cum, 0);
	milies.innerHTML = `${pain} Miles walked`;
}
//May Miles
function may21() {
	may.forEach(function(may4) {
		let mayMonth = may4.firstElementChild.firstChild.nodeValue;
		monthMay.push(mayMonth);
	});
	const toNum = monthMay.map(Number);
	const mayMile = toNum.reduce((acc, cum) => acc + cum, 0);
	mayMiles.innerHTML = `${mayMile} Miles walked`;
}
//June miles
function june21() {
	june.forEach(function(june6) {
		let juneMonth = june6.firstElementChild.firstChild.nodeValue;
		monthJune.push(juneMonth);
	});
	const toNum = monthJune.map(Number);
	const juneMile = toNum.reduce((acc, cum) => acc + cum, 0);
	juneMiles.innerHTML = `${juneMile} Miles walked`;
}

function july21() {
	let monthJuly = [];
	july.forEach(function(july7) {
		let julyMonth = july7.firstElementChild.firstChild.nodeValue;
		monthJuly.push(julyMonth);
	});
	const toNum = monthJuly.map(Number);
	const julyMile = toNum.reduce((acc, cum) => acc + cum, 0);
	julyMiles.innerHTML = `${julyMile} Miles walked`;
}

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

function createColor() {
	h = Math.floor(Math.random() * 360).toString();
	s = Math.floor(Math.random() * 100).toString();
	l = Math.floor(Math.random() * 100).toString();
	let col = `hsl(${h}, ${s}%, ${l}%)`;
	document.body.style.backgroundColor = col;
	colorDisplay.innerHTML = col;
}

addEventListener('DOMContentLoaded', () => {
	steppers();
	calBurn();
	distance();
	may21();
	june21();
	createColor();
	positiveNum();
	negativeNum();
	july21();
});
