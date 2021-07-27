/** @format */
'use strict';
//1.609344
import { properCase, log, listen } from './utils.js';
const timers = document.getElementById('timers');
const gridpage = document.getElementById('grid-page');
const box = document.querySelectorAll('.box');
const gridly = document.getElementById('gridly');
const dogs = document.querySelector('.dogs');

const date = new Date();
timers.innerHTML = date.toString();

box.forEach(function(boxes) {
	if (gridpage) {
		boxes.style.color = '#521B29';
	}
});
//get dog breeds
async function start() {
	const response = await fetch('https://dog.ceo/api/breeds/list/all');
	const data = await response.json();
	createBreedList(data.message);
}
start();

function createBreedList(breedList) {
	dogs.innerHTML = `
	<ul>
	${Object.keys(breedList)
		.map(function(breed) {
			return `<li>${breed}</li>`;
		})
		.join('')}
	</ul>
`;
}
