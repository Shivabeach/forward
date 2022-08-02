/** @format */
//
// Word counter for the textarea
//
const date1 = document.getElementById('distance');
const dates = document.querySelector('.dates');
const blogger = '';
document.querySelector('#content').addEventListener('keyup', function () {
	const res = [];
	const str = this.value.replace(/[\t\n\r\.\?\!]/gm, ' ').split(' ');
	str.map((s) => {
		const trimStr = s.trim();
		if (trimStr.length > 0) {
			res.push(trimStr);
		}
	});
	document.querySelector('#counted').value = res.length;
});

blogger.addEventListener('click', (event) => {
	blogger.innerHTML = 'Submitted';
});

// date1.addEventListener('focusout', function() {
// 	if (date1.value === null || date1.value === '') {
// 		console.log(date1.value);
// 		//dates.innerHTML = 'Date must be entered';
// 	}
// });

// let errors;
// if (date1 === null || date1 === '') {
// 	errors = true;
// } else {
// 	errors = false;
// }
