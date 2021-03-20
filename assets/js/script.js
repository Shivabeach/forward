/** @format */

'use strict';
//links
const item1 = document.querySelector('.item-1');
const item2 = document.querySelector('.item-2');
const item3 = document.querySelector('.item-3');
const item4 = document.querySelector('.item-4');
const date = document.getElementById('date');
const title = document.getElementById('title');
const content = document.getElementById('content');
const tag = document.getElementById('tags');
const blogger = document.getElementById('blogger');

const str = 'Home';
const item11 = str.link('#');
item1.innerHTML = item11;

const str1 = 'Location';
const item22 = str1.link('#');
item2.innerHTML = item22;

const str2 = 'Page Two';
const item33 = str2.link('#');
item3.innerHTML = item33;

const str3 = 'Page Three';
const item44 = str3.link('#');
item4.innerHTML = item44;

let keys = document.querySelector('.blog--keys');
if (keys !== null) {
	const splitter = keys.textContent.split(',');
	splitter.forEach(function (suc, i) {
		const html = `<p>${suc}</p>`;
		keys.insertAdjacentHTML('afterbegin', html);
	});
}

//colors the positive/negative tags
const tags = document.querySelectorAll('.tags');
tags.forEach(function (tag, i) {
	if (tag.textContent === 'Positive') {
		tag.style.backgroundColor = '#ffff00';
		tag.style.color = '#000';
	} else {
		tag.style.backgroundColor = '#ff0000';
		tag.style.color = '#fff';
	}
});

const tagg = document.querySelectorAll('.tags');
tagg.forEach(function (tag1, i) {
	if (tag1.textContent === 'Positive') {
		tag1.style.backgroundColor = '#ffff00';
		tag1.style.color = '#000';
	} else {
		tag1.style.backgroundColor = '#ff0000';
		tag1.style.color = '#fff';
	}
});
