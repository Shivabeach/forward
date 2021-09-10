/** @format */
//medium.com/swlh/24-modern-es6-code-snippets-to-solve-practical-js-problems-3609f301859e

https: const httpGet = (url, callback, err = console.error) => {
	const request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.onload = () => callback(request.responseText);
	request.onerror = () => err(request);
	request.send();
};

httpGet('https://jsonplaceholder.typicode.com/posts/', console.log);

const httpPost = (url, data, callback, err = console.error) => {
	const request = new XMLHttpRequest();
	request.open('POST', url, true);
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.onload = () => callback(request.responseText);
	request.onerror = () => err(request);
	request.send(data);
};

const newPost = {
	userId: 1,
	id: 1337,
	title: 'Foo',
	body: 'bar bar bar',
};
const data = JSON.stringify(newPost);
httpPost('https://jsonplaceholder.typicode.com/posts', data, console.log);
