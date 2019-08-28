// Utility Functions Im Using Instead of Using Lodash

export const debounce = (inner, ms) => {
	let timer = null;
	let resolves = [];

	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			let result = inner(...args);
			resolves.map(res => res(result));
			resolves = [];
		}, ms);

		return new Promise(res => resolves.push(res));
	};
};

export const includes = (array, element) => {
	return array.indexOf(element) !== -1;
};
