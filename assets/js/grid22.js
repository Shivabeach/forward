/** @format */
/* Main stats */
import * as mods from './grid22Util.js';

/**

	TODO:
	- Make positive and negative by month in head - Done
	- add posivive and negative during each month

 */
/* ----------  Start main stats counter  ----------*/
function positives() {
	const posits = [];
	mods.pos.forEach((posi) => {
		const thePositive = posi.textContent;
		posits.push(thePositive);
	});
	const toNum = posits.map(Number);
	const totalPos = toNum.reduce((acc, cum) => acc + cum, 0);
	const results = totalPos.toLocaleString('en-US');
	mods.positive.innerHTML = `${results}`;
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
	mods.negative.innerHTML = `${results}`;
}

function allMiles() {
	const miler = [];
	mods.milesTotal.forEach((miles) => {
		const milesUp = miles.textContent;
		miler.push(milesUp);
	});
	const toNum = miler.map(Number);
	const mi = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.milesAll.textContent = `${mi}`;
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
	mods.stepAll.textContent = `${results}`;
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
	mods.calorieAll.textContent = `${results}`;
}

function allExercise() {
	const walking = [];
	mods.exerc.forEach((move) => {
		const movement = move.firstElementChild.firstChild.nodeValue;
		walking.push(movement);
	});
	const toNum = walking.map(Number);
	const st = toNum.reduce((acc, cum) => acc + cum, 0);
	// const results = st.toLocaleString('en-US');
	mods.exer.textContent = `${st}`;
}

/*= ===========================================
=     Monthly totals start            =
============================================ */
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
	mods.janMiles.innerHTML = `${janMiler}`;
}

function janSteppers() {
	const janMonths = [];
	mods.janStep.forEach((jan) => {
		const january = jan.firstElementChild.firstChild.nodeValue;
		janMonths.push(january);
	});
	const toNum = janMonths.map(Number);
	const janStepper = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.janSteps.innerHTML = `${janStepper}`;
}
function janCalor() {
	const janMonths = [];
	mods.janCalorie.forEach((jan) => {
		const january = jan.firstElementChild.firstChild.nodeValue;
		janMonths.push(january);
	});
	const toNum = janMonths.map(Number);
	const janCals = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.janCalories.innerHTML = `${janCals}`;
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
	mods.janHeartRate.innerHTML = `${heart}`;
}
/*= ============================================
=            Start February        =
============================================= */
function febMilers() {
	const febMonths = [];
	mods.febMile.forEach((feb) => {
		const february = feb.firstElementChild.firstChild.nodeValue;
		febMonths.push(february);
	});
	const toNum = febMonths.map(Number);
	const febMiler = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.febMiles.innerHTML = `${febMiler}`;
}

function febSteppers() {
	const febMonths = [];
	mods.febStep.forEach((feb) => {
		const february = feb.firstElementChild.firstChild.nodeValue;
		febMonths.push(february);
	});
	const toNum = febMonths.map(Number);
	const febStepper = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.febSteps.innerHTML = `${febStepper}`;
}
function febCalor() {
	const febMonths = [];
	mods.febCalorie.forEach((feb) => {
		const february = feb.firstElementChild.firstChild.nodeValue;
		febMonths.push(february);
	});
	const toNum = febMonths.map(Number);
	const febCals = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.febCalories.innerHTML = `${febCals}`;
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
	mods.febHeartRate.innerHTML = `${heart}`;
}
/*= ====  End of February block  ====== */

/* = = = Start march = = = */
function marMilers() {
	const marMonths = [];
	mods.marMile.forEach((mar) => {
		const march = mar.firstElementChild.firstChild.nodeValue;
		marMonths.push(march);
	});
	const toNum = marMonths.map(Number);
	const marMiler = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.marMiles.innerHTML = `${marMiler}`;
}

function marSteppers() {
	const marMonths = [];
	mods.marStep.forEach((mar) => {
		const march = mar.firstElementChild.firstChild.nodeValue;
		marMonths.push(march);
	});
	const toNum = marMonths.map(Number);
	const marStepper = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.marSteps.innerHTML = `${marStepper}`;
}

function marCalor() {
	const marMonths = [];
	mods.marCalorie.forEach((mar) => {
		const march = mar.firstElementChild.firstChild.nodeValue;
		marMonths.push(march);
	});
	const toNum = marMonths.map(Number);
	const marCals = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.marCalories.innerHTML = `${marCals}`;
}
function marHearts() {
	const marMonths = [];
	mods.marHeart.forEach((mar) => {
		const march = mar.firstElementChild.firstChild.nodeValue;
		marMonths.push(march);
	});
	const toNum = marMonths.map(Number);
	const marCals = toNum.reduce((acc, cum) => acc + cum, 0);
	const heart = (marCals / toNum.length).toFixed(2);
	mods.marHeartRate.innerHTML = `${heart}`;
}

/*= ========== Start April ========= */

function aprMilers() {
	const aprMonths = [];
	mods.aprMile.forEach((apr) => {
		const april = apr.firstElementChild.firstChild.nodeValue;
		aprMonths.push(april);
	});
	const toNum = aprMonths.map(Number);
	const janMiler = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.aprMiles.innerHTML = `${janMiler}`;
}

function aprSteppers() {
	const aprMonths = [];
	mods.aprStep.forEach((apr) => {
		const april = apr.firstElementChild.firstChild.nodeValue;
		aprMonths.push(april);
	});
	const toNum = aprMonths.map(Number);
	const aprStepper = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.aprSteps.innerHTML = `${aprStepper}`;
}
function aprCalor() {
	const aprMonths = [];
	mods.aprCalorie.forEach((apr) => {
		const april = apr.firstElementChild.firstChild.nodeValue;
		aprMonths.push(april);
	});
	const toNum = aprMonths.map(Number);
	const janCals = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.aprCalories.innerHTML = `${janCals}`;
}
function aprHearts() {
	const aprMonths = [];
	mods.aprHeart.forEach((apr) => {
		const april = apr.firstElementChild.firstChild.nodeValue;
		aprMonths.push(april);
	});
	const toNum = aprMonths.map(Number);
	const aprCals = toNum.reduce((acc, cum) => acc + cum, 0);
	const heart = (aprCals / toNum.length).toFixed(2);
	mods.aprHeartRate.innerHTML = `${heart}`;
}
/* ==================== Start May ====================== */
function mayMilers() {
	const mayMonths = [];
	mods.mayMile.forEach((may) => {
		const mays = may.firstElementChild.firstChild.nodeValue;
		mayMonths.push(mays);
	});
	const toNum = mayMonths.map(Number);
	const janMiler = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.mayMiles.innerHTML = `${janMiler}`;
}
function maySteppers() {
	const mayMonths = [];
	mods.mayStep.forEach((may) => {
		const mays = may.firstElementChild.firstChild.nodeValue;
		mayMonths.push(mays);
	});
	const toNum = mayMonths.map(Number);
	const mayStepper = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.maySteps.innerHTML = `${mayStepper}`;
}
function mayCalor() {
	const mayMonths = [];
	mods.mayCalorie.forEach((may) => {
		const mays = may.firstElementChild.firstChild.nodeValue;
		mayMonths.push(mays);
	});
	const toNum = mayMonths.map(Number);
	const mayCals = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.mayCalories.innerHTML = `${mayCals}`;
}
function mayHearts() {
	const mayMonths = [];
	mods.mayHeart.forEach((may) => {
		const mays = may.firstElementChild.firstChild.nodeValue;
		mayMonths.push(mays);
	});
	const toNum = mayMonths.map(Number);
	const mayals = toNum.reduce((acc, cum) => acc + cum, 0);
	const heart = (mayals / toNum.length).toFixed(2);
	mods.mayHeartRate.innerHTML = `${heart}`;
}
/* ===========================start June ============= */

function juneMilers() {
	const juneMonths = [];
	mods.junMile.forEach((june) => {
		const junes = june.firstElementChild.firstChild.nodeValue;
		juneMonths.push(junes);
	});
	const toNum = juneMonths.map(Number);
	const janMiler = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.junMiles.innerHTML = `${janMiler}`;
}
function juneSteppers() {
	const juneMonths = [];
	mods.junStep.forEach((june) => {
		const junes = june.firstElementChild.firstChild.nodeValue;
		juneMonths.push(junes);
	});
	const toNum = juneMonths.map(Number);
	const juneStepper = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.junSteps.innerHTML = `${juneStepper}`;
}
function juneCalor() {
	const juneMonths = [];
	mods.junCalorie.forEach((june) => {
		const junes = june.firstElementChild.firstChild.nodeValue;
		juneMonths.push(junes);
	});
	const toNum = juneMonths.map(Number);
	const juneCals = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.junCalories.innerHTML = `${juneCals}`;
}
function juneHearts() {
	const juneMonths = [];
	mods.junHeart.forEach((june) => {
		const junes = june.firstElementChild.firstChild.nodeValue;
		juneMonths.push(junes);
	});
	const toNum = juneMonths.map(Number);
	const mayals = toNum.reduce((acc, cum) => acc + cum, 0);
	const heart = (mayals / toNum.length).toFixed(2);
	mods.junHeartRate.innerHTML = `${heart}`;
}
// Start July

function julyMilers() {
	const julMonths = [];
	mods.julMile.forEach((july) => {
		const julys = july.firstElementChild.firstChild.nodeValue;
		julMonths.push(julys);
	});
	const toNum = julMonths.map(Number);
	const julMiler = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.julMiles.innerHTML = `${julMiler}`;
}
function julySteppers() {
	const julMonths = [];
	mods.julStep.forEach((july) => {
		const julys = july.firstElementChild.firstChild.nodeValue;
		julMonths.push(julys);
	});
	const toNum = julMonths.map(Number);
	const julyStepper = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.julSteps.innerHTML = `${julyStepper}`;
}

function julyCalor() {
	const julMonths = [];
	mods.julCalorie.forEach((july) => {
		const julys = july.firstElementChild.firstChild.nodeValue;
		julMonths.push(julys);
	});
	const toNum = julMonths.map(Number);
	const julyCals = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.julCalories.innerHTML = `${julyCals}`;
}

function julyHearts() {
	const julyMonths = [];
	mods.julHeart.forEach((july) => {
		const julys = july.firstElementChild.firstChild.nodeValue;
		julyMonths.push(julys);
	});
	const toNum = julyMonths.map(Number);
	const mayals = toNum.reduce((acc, cum) => acc + cum, 0);
	const heart = (mayals / toNum.length).toFixed(2);
	mods.julHeartRate.innerHTML = `${heart}`;
}
// start August -----------------------------
function augMilers() {
	const augMonths = [];
	mods.augMile.forEach((aug) => {
		const augs = aug.firstElementChild.firstChild.nodeValue;
		augMonths.push(augs);
	});
	const toNum = augMonths.map(Number);
	const augMiler = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.augMiles.innerHTML = `${augMiler}`;
}

function augSteppers() {
	const augMonths = [];
	mods.augStep.forEach((aug) => {
		const augs = aug.firstElementChild.firstChild.nodeValue;
		augMonths.push(augs);
	});
	const toNum = augMonths.map(Number);
	const augStepper = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.augSteps.innerHTML = `${augStepper}`;
}

function augCalor() {
	const augMonths = [];
	mods.augCalorie.forEach((aug) => {
		const augs = aug.firstElementChild.firstChild.nodeValue;
		augMonths.push(augs);
	});
	const toNum = augMonths.map(Number);
	const augCals = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.augCalories.innerHTML = `${augCals}`;
}

function augHearts() {
	const augMonths = [];
	mods.augHeart.forEach((aug) => {
		const augs = aug.firstElementChild.firstChild.nodeValue;
		augMonths.push(augs);
	});
	const toNum = augMonths.map(Number);
	const mayals = toNum.reduce((acc, cum) => acc + cum, 0);
	const heart = (mayals / toNum.length).toFixed(2);
	mods.augHeartRate.innerHTML = `${heart}`;
}

// start SEPTEMBER -----------------------------
function sepMilers() {
	const sepMonths = [];
	mods.sepMile.forEach((sep) => {
		const seps = sep.firstElementChild.firstChild.nodeValue;
		sepMonths.push(seps);
	});
	const toNum = sepMonths.map(Number);
	const sepMiler = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.sepMiles.innerHTML = `${sepMiler}`;
}

function sepSteppers() {
	const sepMonths = [];
	mods.sepStep.forEach((sep) => {
		const seps = sep.firstElementChild.firstChild.nodeValue;
		sepMonths.push(seps);
	});
	const toNum = sepMonths.map(Number);
	const sepStepper = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.sepSteps.innerHTML = `${sepStepper}`;
}

function sepCalor() {
	const sepMonths = [];
	mods.sepCalorie.forEach((sep) => {
		const seps = sep.firstElementChild.firstChild.nodeValue;
		sepMonths.push(seps);
	});
	const toNum = sepMonths.map(Number);
	const sepCals = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.sepCalories.innerHTML = `${sepCals}`;
}

function sepHearts() {
	const sepMonths = [];
	mods.sepHeart.forEach((sep) => {
		const seps = sep.firstElementChild.firstChild.nodeValue;
		sepMonths.push(seps);
	});
	const toNum = sepMonths.map(Number);
	const mayals = toNum.reduce((acc, cum) => acc + cum, 0);
	const heart = (mayals / toNum.length).toFixed(2);
	mods.sepHeartRate.innerHTML = `${heart}`;
}

/* --------------------------------- October -------------------------------- */

function octMilers() {
	const octMonths = [];
	mods.octMile.forEach((oct) => {
		const octs = oct.firstElementChild.firstChild.nodeValue;
		octMonths.push(octs);
	});
	const toNum = octMonths.map(Number);
	const octMiler = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.octMiles.innerHTML = `${octMiler}`;
}

function octSteppers() {
	const octMonths = [];
	mods.octStep.forEach((oct) => {
		const octs = oct.firstElementChild.firstChild.nodeValue;
		octMonths.push(octs);
	});
	const toNum = octMonths.map(Number);
	const octStepper = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.octSteps.innerHTML = `${octStepper}`;
}

function octCalor() {
	const octMonths = [];
	mods.octCalorie.forEach((oct) => {
		const octs = oct.firstElementChild.firstChild.nodeValue;
		octMonths.push(octs);
	});
	const toNum = octMonths.map(Number);
	const octCals = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.octCalories.innerHTML = `${octCals}`;
}

function octHearts() {
	const octMonths = [];
	mods.octHeart.forEach((oct) => {
		const octs = oct.firstElementChild.firstChild.nodeValue;
		octMonths.push(octs);
	});
	const toNum = octMonths.map(Number);
	const mayals = toNum.reduce((acc, cum) => acc + cum, 0);
	const heart = (mayals / toNum.length).toFixed(2);
	mods.octHeartRate.innerHTML = `${heart}`;
}
/* Start November */

function novMilers() {
	const novMonths = [];
	mods.novMile.forEach((nov) => {
		const novs = nov.firstElementChild.firstChild.nodeValue;
		novMonths.push(novs);
	});
	const toNum = novMonths.map(Number);
	const novMiler = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.novMiles.innerHTML = `${novMiler}`;
}

function novSteppers() {
	const novMonths = [];
	mods.novStep.forEach((nov) => {
		const novs = nov.firstElementChild.firstChild.nodeValue;
		novMonths.push(novs);
	});
	const toNum = novMonths.map(Number);
	const novStepper = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.novSteps.innerHTML = `${novStepper}`;
}

function novCalor() {
	const novMonths = [];
	mods.novCalorie.forEach((nov) => {
		const novs = nov.firstElementChild.firstChild.nodeValue;
		novMonths.push(novs);
	});
	const toNum = novMonths.map(Number);
	const novCals = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.novCalories.innerHTML = `${novCals}`;
}

function novHearts() {
	const novMonths = [];
	mods.novHeart.forEach((nov) => {
		const novs = nov.firstElementChild.firstChild.nodeValue;
		novMonths.push(novs);
	});
	const toNum = novMonths.map(Number);
	const mayals = toNum.reduce((acc, cum) => acc + cum, 0);
	const heart = (mayals / toNum.length).toFixed(2);
	mods.novHeartRate.innerHTML = `${heart}`;
}
/* ----------- December ----------------------- */

function decMilers() {
	const decMonths = [];
	mods.decMile.forEach((dec) => {
		const decs = dec.firstElementChild.firstChild.nodeValue;
		decMonths.push(decs);
	});
	const toNum = decMonths.map(Number);
	const decMiler = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.decMiles.innerHTML = `${decMiler}`;
}

function decSteppers() {
	const decMonths = [];
	mods.decStep.forEach((dec) => {
		const decs = dec.firstElementChild.firstChild.nodeValue;
		decMonths.push(decs);
	});
	const toNum = decMonths.map(Number);
	const decStepper = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.decSteps.innerHTML = `${decStepper}`;
}

function decCalor() {
	const decMonths = [];
	mods.decCalorie.forEach((dec) => {
		const decs = dec.firstElementChild.firstChild.nodeValue;
		decMonths.push(decs);
	});
	const toNum = decMonths.map(Number);
	const decCals = toNum.reduce((acc, cum) => acc + cum, 0);
	mods.decCalories.innerHTML = `${decCals}`;
}

function decHearts() {
	const decMonths = [];
	mods.decHeart.forEach((dec) => {
		const decs = dec.firstElementChild.firstChild.nodeValue;
		decMonths.push(decs);
	});
	const toNum = decMonths.map(Number);
	const mayals = toNum.reduce((acc, cum) => acc + cum, 0);
	const heart = (mayals / toNum.length).toFixed(2);
	mods.decHeartRate.innerHTML = `${heart}`;
}
/* -------------------------------- The works ------------------------ */
addEventListener('DOMContentLoaded', () => {
	janMilers();
	janSteppers();
	janCalor();
	janHearts();
	febMilers();
	febSteppers();
	febCalor();
	febHearts();
	marMilers();
	marSteppers();
	marCalor();
	marHearts();
	aprMilers();
	aprSteppers();
	aprCalor();
	aprHearts();
	mayMilers();
	maySteppers();
	mayCalor();
	mayHearts();
	juneMilers();
	juneSteppers();
	juneCalor();
	juneHearts();
	julyMilers();
	julySteppers();
	julyCalor();
	julyHearts();
	augMilers();
	augSteppers();
	augCalor();
	augHearts();
	sepMilers();
	sepSteppers();
	sepCalor();
	sepHearts();
	octSteppers();
	octCalor();
	octHearts();
	octMilers();
	novCalor();
	novMilers();
	novSteppers();
	novHearts();
	decSteppers();
	decMilers();
	decCalor();
	decHearts();
	positives();
	negatives();
	allMiles();
	allSteps();
	allCals();
	allExercise();
});

addEventListener('DOMContentLoaded', () => {
	const h = Math.floor(Math.random() * 360);
	const col = `hsl(${h}deg, 100%, 90%)`;
	document.getElementById('grid22').style.backgroundColor = col;
	document.querySelector('.color').innerText = col;
});
// const juneAvg = (juneMile / toNum.length).toFixed(2);
