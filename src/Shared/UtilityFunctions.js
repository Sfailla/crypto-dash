// Utility Functions Im Using Instead of Using Lodash

// DEBOUNCE FUNCTION
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

// INCLUDES HELPER FUNCTION
export const includes = (array, element) => {
	return array.indexOf(element) !== -1;
};
// UPPERCASES FIRST LETTER HELPER FUNCTION
export const toProperCase = lower => {
	return lower[0].toUpperCase() + lower.slice(1);
};
// NUMBER FORMATTER HELPER FUNCTION
export const numberFormatter = number => {
	return +(number + '').slice(0, 7);
};
