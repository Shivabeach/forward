/** @format */
'use strict';

//https://api.openweathermap.org/data/2.5/onecall?lat=36.1033333&lon=-84.1319444&units=imperial&exclude=minutely&appid=b8a9b43e6b2db287c12cd03bd327c021
// b8a9b43e6b2db287c12cd03bd327c021
//api.openweathermap.org/data/2.5/forecast/daily?zip=37716,us&units=imperial&appid=b8a9b43e6b2db287c12cd03bd327c021
//
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
