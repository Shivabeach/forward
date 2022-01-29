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

/*============================================
=     Monthly totals start            =
============================================*/

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

addEventListener('DOMContentLoaded', () => {
	janMilers();
	janSteppers();
	janCalor();
	janHearts();
	positives();
	negatives();
	allMiles();
	allSteps();
	allCals();
});
// const juneAvg = (juneMile / toNum.length).toFixed(2);
