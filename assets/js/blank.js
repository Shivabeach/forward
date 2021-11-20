/** @format */
let colors = [];
const retrieve = localStorage.getItem('stored');

function getStore() {
	let choco = 'hsl(222, 62%, 42%)';
	if (retrieve === null) {
		colors.push(choco);
		localStorage.setItem('stored', JSON.stringify(colors));
	}
}

const alphaSort = (array) => {
	if (!array.length) return;
	return array.sort();
};

function getStorage() {
	if (localStorage.getItem('stored') === null) {
		getStore();
	} else {
		colors = JSON.parse(localStorage.getItem('stored'));
	}
	return colors;
}

function pusher(added) {
	colors.push(added);
	localStorage.setItem('stored', JSON.stringify(colors));
}

function displayArr(mov) {
	alphaSort(colors).reverse();
	colors.forEach(function (mov, i) {
		const html = `<li>${mov}</li>`;
		showMe.insertAdjacentHTML('afterbegin', html);
	});
}

addEventListener('DOMContentLoaded', () => {
	getStorage();
	pusher(col);
	displayArr();
});
