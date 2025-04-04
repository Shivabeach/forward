/** @format */
let colors = [];
const retrieve = localStorage.getItem('stored');

function getStore() {
	const choco = 'hsl(222, 62%, 42%)';
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

function displayArr() {
	alphaSort(colors).reverse();
	colors.forEach((mov, i) => {
		const html = `<li>${mov}</li>`;
		showMe.insertAdjacentHTML('afterbegin', html);
	});
}

addEventListener('DOMContentLoaded', () => {
	getStorage();
	pusher(col);
	displayArr();
});

const MIN_TITLE_LENGTH = 6;
const MIN_CONTENT_LENGTH = 15;

function validateField(field, condition, message) {
	if (condition) {
		messages.push(message);
		field.classList.add('error-border');
	}
}

blogger?.addEventListener('click', (e) => {
	const messages = [];
	validateField(date, date.value.trim() === '', 'Date cannot be empty');
	validateField(
		title,
		title.value.length <= MIN_TITLE_LENGTH,
		'Fill out the title'
	);
	validateField(
		content,
		content.value.length <= MIN_CONTENT_LENGTH,
		'A total lack of content'
	);
	validateField(tags, tags.value.trim() === '', 'Need a Positive or Negative');
	validateField(
		prime,
		prime.value.length <= MIN_TITLE_LENGTH,
		'Need some guiding words'
	);

	if (messages.length > 0) {
		e.preventDefault();
		error.innerText = messages.join(', ');
		error.style.display = 'block';
	}
});
