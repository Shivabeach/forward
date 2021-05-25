/** @format */
'use strict';
//1.609344
const gridpage = document.getElementById('grid-page');
const box = document.querySelectorAll('.box');
const gridly = document.getElementById('gridly');

box.forEach(function(boxes) {
	if (gridpage) {
		boxes.style.color = '#521B29';
	}
});
// const show = document.querySelectorAll('.show');
// show.foreach(function(shows) {
// 	if (shows < 1) {
// 		shows.addClass('higher');
// 	}
// });
