/** @format */
/* Main stats */
import * as mods from './grid22Util.js';

/**

	TODO:
	- Make positive and negative by month in head - Done
	- add posivive and negative during each month

 */
/*----------  Start main stats counter  ----------*/

function positives() {
	const posits = [];
	mods.pos.forEach((posi) => {
		const thePositive = posi.textContent;
		posits.push(thePositive);
	});
	const toNum = posits.map(Number);
	const totalPos = toNum.reduce((acc, cum) => acc + cum, 0);
	const results = totalPos.toLocaleString('en-US');
	positive.innerHTML = `${results}`;
}
function negatives() {
	const negits = [];
	mods.neg.forEach((posi) => {
		const theNegative = posi.textContent;
		negits.push(theNegative);
	});
	const toNum = negits.map(Number);
	const totalNeg = toNum.reduce((acc, cum) => acc + cum, 0);
	const results = totalNeg.toLocaleString('en-US');
	negative.innerHTML = `${results}`;
}

function allMiles() {
	const miler = [];
	mods.milesTotal.forEach((miles) => {
		const milesUp = miles.textContent;
		miler.push(milesUp);
	});
	const toNum = miler.map(Number);
	const mi = toNum.reduce((acc, cum) => acc + cum, 0);
	milesAll.textContent = `${mi}`;
}
function allSteps() {
	const stepping = [];
	mods.stepsTotal.forEach((steps) => {
		const stepsUp = steps.textContent;
		stepping.push(stepsUp);
	});
	const toNum = stepping.map(Number);
	const st = toNum.reduce((acc, cum) => acc + cum, 0);
	const results = st.toLocaleString('en-US');
	stepAll.textContent = `${results}`;
}

function allCals() {
	const cal = [];
	mods.calTotal.forEach((cals) => {
		const calsUp = cals.textContent;
		cal.push(calsUp);
	});
	const toNum = cal.map(Number);
	const st = toNum.reduce((acc, cum) => acc + cum, 0);
	const results = st.toLocaleString('en-US');
	calorieAll.textContent = `${results}`;
}

function allExercise() {
	const walking = [];
	mods.exerc.forEach((move) => {
		const movement = move.firstElementChild.firstChild.nodeValue;
		walking.push(movement);
	});
	const toNum = walking.map(Number);
	const st = toNum.reduce((acc, cum) => acc + cum, 0);
	//const results = st.toLocaleString('en-US');
	exer.textContent = `${st}`;
}

/*============================================
=     Monthly totals start            =
============================================*/
/**
 * Start january
 */

function janMilers() {
	const janMonths = [];
	mods.janMile.forEach((jan) => {
		const january = jan.firstElementChild.firstChild.nodeValue;
		janMonths.push(january);
	});
	const toNum = janMonths.map(Number);
	const janMiler = toNum.reduce((acc, cum) => acc + cum, 0);
	document.querySelector('.janMiles').innerHTML = `${janMiler}`;
}

function janSteppers() {
	const janMonths = [];
	mods.janStep.forEach((jan) => {
		const january = jan.firstElementChild.firstChild.nodeValue;
		janMonths.push(january);
	});
	const toNum = janMonths.map(Number);
	const janStepper = toNum.reduce((acc, cum) => acc + cum, 0);
	document.querySelector('.janSteps').innerHTML = `${janStepper}`;
}
function janCalor() {
	const janMonths = [];
	mods.janCalorie.forEach((jan) => {
		const january = jan.firstElementChild.firstChild.nodeValue;
		janMonths.push(january);
	});
	const toNum = janMonths.map(Number);
	const janCals = toNum.reduce((acc, cum) => acc + cum, 0);
	document.querySelector('.janCalories').innerHTML = `${janCals}`;
}
function janHearts() {
	const janMonths = [];
	mods.janHeart.forEach((jan) => {
		const january = jan.firstElementChild.firstChild.nodeValue;
		janMonths.push(january);
	});
	const toNum = janMonths.map(Number);
	const janCals = toNum.reduce((acc, cum) => acc + cum, 0);
	const heart = (janCals / toNum.length).toFixed(2);
	document.querySelector('.janHeartRate').innerHTML = `${heart}`;
}
/*=============================================
=            Start February        =
=============================================*/
function febMilers() {
	const febMonths = [];
	mods.febMile.forEach((feb) => {
		const february = feb.firstElementChild.firstChild.nodeValue;
		febMonths.push(february);
	});
	const toNum = febMonths.map(Number);
	const febMiler = toNum.reduce((acc, cum) => acc + cum, 0);
	document.querySelector('.febMiles').innerHTML = `${febMiler}`;
}

function febSteppers() {
	const febMonths = [];
	mods.febStep.forEach((feb) => {
		const february = feb.firstElementChild.firstChild.nodeValue;
		febMonths.push(february);
	});
	const toNum = febMonths.map(Number);
	const febStepper = toNum.reduce((acc, cum) => acc + cum, 0);
	document.querySelector('.febSteps').innerHTML = `${febStepper}`;
}
function febCalor() {
	const febMonths = [];
	mods.febCalorie.forEach((feb) => {
		const february = feb.firstElementChild.firstChild.nodeValue;
		febMonths.push(february);
	});
	const toNum = febMonths.map(Number);
	const febCals = toNum.reduce((acc, cum) => acc + cum, 0);
	document.querySelector('.febCalories').innerHTML = `${febCals}`;
}
function febHearts() {
	const febMonths = [];
	mods.febHeart.forEach((feb) => {
		const february = feb.firstElementChild.firstChild.nodeValue;
		febMonths.push(february);
	});
	const toNum = febMonths.map(Number);
	const febCals = toNum.reduce((acc, cum) => acc + cum, 0);
	const heart = (febCals / toNum.length).toFixed(2);
	document.querySelector('.febHeartRate').innerHTML = `${heart}`;
}
/*=====  End of February block  ======*/

addEventListener('DOMContentLoaded', () => {
	janMilers();
	janSteppers();
	janCalor();
	janHearts();
	febMilers();
	febSteppers();
	febCalor();
	febHearts();
	positives();
	negatives();
	allMiles();
	allSteps();
	allCals();
	allExercise();
});

addEventListener('DOMContentLoaded', () => {
	const h = Math.floor(Math.random() * 360);
	let col = `hsl(${h}deg, 100%, 90%)`;
	document.getElementById('grid22').style.backgroundColor = col;
	document.querySelector('.color').innerText = col;
});
// const juneAvg = (juneMile / toNum.length).toFixed(2);
