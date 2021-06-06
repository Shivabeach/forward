/** @format */

document.querySelector('#content').addEventListener('keyup', function() {
	let res = [];
	let str = this.value.replace(/[\t\n\r\.\?\!]/gm, ' ').split(' ');
	str.map((s) => {
		let trimStr = s.trim();
		if (trimStr.length > 0) {
			res.push(trimStr);
		}
	});
	document.querySelector('#counted').innerText = res.length;
});

blogger.addEventListener('click', (event) => {
	blogger.innerHTML = 'Submitted';
});
