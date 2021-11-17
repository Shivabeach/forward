/**
 *  @description The stats JS page that calculates all values needed using querySelectorAll, arrays, toString and forEach.
 *  @format
 */

'use strict';
import {
	properCase,
	log,
	listen,
	addToArray,
	addUp,
	months,
	select,
} from './utils.js';
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
const aug = document.querySelectorAll('.aug');
const septem = document.querySelectorAll('.septem');
const octob = document.querySelectorAll('.octob');
const octoHeart = document.querySelectorAll('.octoHeart');
const novob = document.querySelectorAll('.novob');
// console.log(months.splice(2, 1, 'March'));
// console.log(months);
const ex = document.querySelectorAll('.ex');

const posi = document.getElementById('posi');
const neggy = document.getElementById('neggy');
const miliess = document.getElementById('milies');
const steppen = document.getElementById('steppen');
const burned = document.getElementById('burned');
const mayMiles = document.getElementById('mayMiles');
const juneMiles = document.getElementById('juneMiles');
const colorDisplay = document.getElementById('colorDisplay');
const julyMiles = document.getElementById('julyMiles');
const augMiles = document.getElementById('augMiles');
const septMiles = document.getElementById('septMiles');
const octMiles = document.getElementById('octMiles');
const octRate = document.getElementById('octRate');
const novMiles = document.getElementById("novMiles")
const novAverage = document.getElementById("novAverage")
const novRate = document.getElementById("novRate")

const pos = document.querySelectorAll('.pos');
const exer = document.getElementById('exer');
const xe = document.querySelector('.ex');
const item5 = document.querySelector('.inline-list');
const test = document.querySelector('.ops');
//console.log(test.firstElementChild.firstChild.nextSibling.textContent);
//<li class="pb25 ex"> = firstElementChild of the <ul>
//Exercise: firstchild
//<strong> = nextSibling
//2 = textContent
//var commas = num.toLocaleString("en-US");
//arrays
let calArray = [];
let arr = [];
let miles2 = [];
let monthMay = [];
let monthJune = [];
let h, s, l;
let happy = [];
let monthOct = [];

//functions
//add up the positive numbers and display in top corner
function positiveNum() {
	pos.forEach(function (positives) {
		let positi = positives.textContent;
		happy.push(positi);
	});
	const toNumbers = happy.map(Number);
	const numb = toNumbers.reduce((acc, cum) => acc + cum, 0);
	const results = numb.toLocaleString('en-US');
	posi.innerHTML = `${results} Positive!`;
}
//add up the negative numbers and display in top corner
function negativeNum() {
	let negg = [];
	neg.forEach(function (negatives) {
		let nega = negatives.textContent;
		negg.push(nega);
	});
	const toNumbers = negg.map(Number);
	const numb = toNumbers.reduce((acc, cum) => acc + cum, 0);
	const results = numb.toLocaleString('en-US');
	neggy.innerHTML = `${results} Negative`;
}
//exercise
function exerc() {
	let burnie = [];
	ex.forEach((times) => {
		let burn = times.firstElementChild.firstChild.nodeValue;
		burnie.push(burn);
	});
	const toNumbers = burnie.map(Number);
	const freshAir = toNumbers.reduce((acc, cum) => acc + cum, 0);
	const results = freshAir.toLocaleString('en-US');
	exer.innerHTML = `${results} days exercising`;
}

//steps
function steppers() {
	//all classes of step
	mstep.forEach(function (many) {
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
	cals.forEach((burny) => {
		let burnCal = burny.firstElementChild.firstChild.nodeValue;
		calArray.push(burnCal);
	});
	const toNumber = calArray.map(Number);
	const burning = toNumber.reduce((acc, cum) => acc + cum, 0);
	const calBurn = burning.toLocaleString('en-US');
	burned.innerHTML = `${calBurn} Calories Burned`;
}
//
//Miles
function distance() {
	miles1.forEach((dist) => {
		let milesWalk = dist.firstElementChild.firstChild.nodeValue;
		miles2.push(milesWalk);
	});
	const toNum = miles2.map(Number);
	const pain = toNum.reduce((acc, cum) => acc + cum, 0);
	milies.innerHTML = `${pain} Miles walked`;
}
//May Miles
function may21() {
	may.forEach((may4) => {
		let mayMonth = may4.firstElementChild.firstChild.nodeValue;
		monthMay.push(mayMonth);
	});
	const toNum = monthMay.map(Number);
	const mayMile = toNum.reduce((acc, cum) => acc + cum, 0);
	mayMiles.innerHTML = `${mayMile} Miles walked`;
}
//June miles
function june21() {
	june.forEach((june6) => {
		let juneMonth = june6.firstElementChild.firstChild.nodeValue;
		monthJune.push(juneMonth);
	});
	const toNum = monthJune.map(Number);
	const juneMile = toNum.reduce((acc, cum) => acc + cum, 0);
	juneMiles.innerHTML = `${juneMile} Miles walked`;
	const juneAvg = (juneMile / toNum.length).toFixed(2);
	document.getElementById('juneAv').innerHTML = `${juneAvg} average miles`;
}

function july21() {
	let monthJuly = [];
	july.forEach((july7) => {
		let julyMonth = july7.firstElementChild.firstChild.nodeValue;
		monthJuly.push(julyMonth);
	});
	const toNum = monthJuly.map(Number);
	const julyMile = toNum.reduce((acc, cum) => acc + cum, 0);
	const julyAv = julyMile / toNum.length;
	julyMiles.innerHTML = `${julyMile} Miles walked`;
	document.getElementById('julyAverage').innerHTML = `${julyAv} average miles`;
}

function aug21() {
	let monthAug = [];
	aug.forEach((august) => {
		let augMonth = august.firstElementChild.firstChild.nodeValue;
		monthAug.push(augMonth);
	});
	const toNum = monthAug.map(Number);
	const augMile = toNum.reduce((acc, cum) => acc + cum, 0);
	augMiles.innerHTML = `${augMile} Miles walked`;
	const avg = (augMile / toNum.length).toFixed(2);
	document.getElementById('augAverage').innerHTML = `${avg} average miles`;
}

function sept21() {
	let monthSept = [];
	septem.forEach((sept) => {
		let septMonth = sept.firstElementChild.firstChild.nodeValue;
		monthSept.push(septMonth);
	});
	const toNum = monthSept.map(Number);
	const septemMile = toNum.reduce((acc, cum) => acc + cum, 0);
	septMiles.innerHTML = `${septemMile} Miles walked`;
	const avg = (septemMile / toNum.length).toFixed(2);
	document.getElementById('septAverage').innerHTML = `${avg} average miles`;
}

function oct21() {
	octob.forEach((oct) => {
		let octMonth = oct.firstElementChild.firstChild.nodeValue;
		monthOct.push(octMonth);
	});
	const toNum = monthOct.map(Number);
	const octoMile = toNum.reduce((acc, cum) => acc + cum, 0);
	octMiles.innerHTML = `${octoMile} Miles walked`;
	const avg = (octoMile / toNum.length).toFixed(2);
	document.getElementById('octAverage').innerHTML = `${avg} average miles`;
}
// Start heart rate
function octBeat() {
	let beats10 = [];
	octoHeart.forEach((octbeat) => {
		let octHeartRate = octbeat.firstElementChild.firstChild.nodeValue;
		beats10.push(octHeartRate);
	});
	const toNum = beats10.map(Number);
	const octoberBeats = toNum.reduce((acc, cum) => acc + cum, 0);

	const avg = (octoberBeats / toNum.length).toFixed(2);
	octRate.innerHTML = `${avg} Heart rate`;
}

function nov21() {
	let monthNov = []
	novob.forEach((nov) => {
		let novMonth = nov.firstElementChild.firstChild.nodeValue;
		monthNov.push(novMonth);
	});
	const toNum = monthNov.map(Number);
	const novemMile = toNum.reduce((acc, cum) => acc + cum, 0);
	novMiles.innerHTML = `${novemMile} Miles walked`;
	const avg = (novemMile / toNum.length).toFixed(2);
	document.getElementById('novAverage').innerHTML = `${avg} average miles`;
}

steps.forEach(function (stepp) {
	if (stepp.textContent < 0) {
		stepp.classList.add('highe');
	} else {
		stepp.classList.add('gen7');
	}
});

miles.forEach(function (mile) {
	if (mile.textContent < 0) {
		mile.classList.add('highe');
	} else {
		mile.classList.add('gen7');
	}
});

sleep.forEach((sleeps) => {
	if (sleeps.textContent < 0) {
		sleeps.classList.add('highe');
	} else {
		sleeps.classList.add('gen7');
	}
});

calories.forEach(function (calorie) {
	if (calorie.textContent < 0) {
		calorie.classList.add('highe');
	} else {
		calorie.classList.add("gen7");
	}
});

exercise.forEach(function (exer) {
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
	item5.style.backgroundColor = col;
}

/**
 *  @description When page is loaded, perform all functions listed
 *  @param  {[type]} 'DOMContentLoaded' Page is loaded
 *  @param  {[type]} (                  [description]
 *  @return {[type]}                    [description]
 */
addEventListener('DOMContentLoaded', () => {
	steppers();
	calBurn();
	distance();
	exerc();
	may21();
	june21();
	createColor();
	positiveNum();
	negativeNum();
	july21();
	aug21();
	sept21();
	oct21();
	octBeat();
	nov21();
});
