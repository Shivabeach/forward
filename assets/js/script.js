/** @format */

// links
const item1 = document.querySelector('.item-1');
const item2 = document.querySelector('.item-2');
const item3 = document.querySelector('.item-3');
const item4 = document.querySelector('.item-4');
const item5 = document.querySelector('.item-5');
const item6 = document.querySelector('.item-6');
const item7 = document.querySelector('.item-7');

const date = document.getElementById('date');
const title = document.getElementById('title');
const content = document.getElementById('content');
// const tag = document.getElementById('tags');
const blogger = document.getElementById('blogger');
const prime = document.getElementById('primeKeys');
const error = document.getElementById('error');
const three = document.getElementById('three');
const copyr = document.querySelector('.copyr');
// const div30 = document.querySelector('.div30');
// const distance = document.getElementById('distance');
// const place = document.getElementById('place');
const demo = document.getElementById('demo12');
const myVar = setInterval(myTimer, 1000);
function myTimer() {
	const d = new Date();
	demo.innerHTML = d.toLocaleTimeString();
}

const str = 'Home';
const item11 = str.link('http://forward/');
item1.innerHTML = item11;

const str1 = 'Forms';
const item22 = str1.link('http://forward/forms');
item2.innerHTML = item22;

const str2 = 'General Health';
const item33 = str2.link('http://forward/pages/health');
item3.innerHTML = item33;

const str3 = 'Statistics';
const item44 = str3.link('http://forward/pages/grids');
item4.innerHTML = item44;

const str4 = 'Grid';
const item55 = str4.link('http://forward/pages/learn');
item5.innerHTML = item55;

const str5 = 'Taxonomy';
const item66 = str5.link('http://forward/pages/taxes');
item6.innerHTML = item66;

const str6 = '2022 Stats';
const item77 = str6.link('http://forward/pages/grid22');
item7.innerHTML = item77;

for (let i = 0; i < document.links.length; i++) {
	// this highlights the current active link
	if (document.links[i].href === document.URL) {
		document.links[i].className = 'current';
	}
}

const keys = document.querySelector('.blog--keys');
if (keys !== null) {
	const splitter = keys.textContent.split(',');
	splitter.forEach((suc) => {
		const html = `<p class="ital">${suc}</p>`;
		keys.insertAdjacentHTML('afterbegin', html);
	});
}

// colors the positive/negative tags
const tags = document.querySelectorAll('.tags');
tags.forEach((tag) => {
	if (tag.textContent === 'Positive') {
		tag.style.backgroundColor = '#ffff00';
		tag.style.color = '#000';
	} else {
		tag.style.backgroundColor = '#ff0000';
		tag.style.color = '#fff';
	}
});

const tagg = document.querySelectorAll('.tags');
tagg.forEach((tag1) => {
	if (tag1.textContent === 'Positive') {
		tag1.style.backgroundColor = '#ffff00';
		tag1.style.color = '#000';
	} else {
		tag1.style.backgroundColor = '#ff0000';
		tag1.style.color = '#fff';
	}
});
// form validation with an array
if (blogger != null) {
	blogger.addEventListener('click', (e) => {
		const messages = [];
		if (date.value === '' || date.value === null) {
			messages.push('Date cannot be empty');
			date.style.border = '3px solid #ff0000';
		}
		if (title.value <= 6) {
			messages.push('Fill out the title');
			title.style.border = '3px solid #ff0000';
		}
		if (content.value <= 15) {
			messages.push('a total lack of content');
			content.style.border = '3px solid #ff0000';
		}

		if (tags.value === '' || tags.value === null) {
			messages.push('Need a Positive or Negative');
			tags.style.border = '3px solid #ff0000';
		}
		if (prime.value <= 6) {
			messages.push('Need some guiding words');
			prime.style.border = '3px solid #ff0000';
		}

		// display messages / errors
		if (messages.length > 0) {
			e.preventDefault();
			error.innerText = messages.join(', ');
		}
	});
}
const para = document.createElement('p');
const textual = 'This is completely about my weight';
para.append(textual);
if (three != null) three.append(para);

const yer = new Date();
if (copyr != null) copyr.innerHTML = `\u00A92019 - ${yer.getFullYear()}`; // copywright

// const randomHex = () =>
// 	`#${Math.floor(Math.random() * 0xffffff)
// 		.toString(16)
// 		.padEnd(6, '0')}`;
// console.log(randomHex());
// Result: #92b008

// document.getElementById('btn').onclick = function() {
//   var markedCheckbox = document.getElementsByName('pl');
//   for (var checkbox of markedCheckbox) {
//     if (checkbox.checked)
//       document.body.append(checkbox.value + ' ');
//   }
// }
