const theme = 'dark';

export const lightTheme = theme === 'light';

export const color = lightTheme ? 'white' : '#061A44';
export const color2 = lightTheme ? 'white' : '#010E2C';
export const color3 = lightTheme ? '#09F010' : '#42FF3A';

if (lightTheme) {
	document.body.style.background = '#E1EAEE';
	document.body.style.color = '#061A44';
}

export const lightBlueBackground = `background-color: ${color}`;
export const backgroundColor2 = `background-color: ${color2}`;
export const greenBackgroundColor = `background-color: ${color3}`;

export const fontColorGreen = 'color: #03A9F4';
export const fontColorWhite = 'color: white';

export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${lightTheme
	? '#A9B6FF'
	: '#121D5B'}`;
