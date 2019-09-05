// const theme = 'dark';
const theme = 'light';

export const lightTheme = theme === 'light';

export const color = lightTheme ? 'white' : '#061A44';
export const color2 = lightTheme ? 'white' : '#010E2C';
export const color3 = lightTheme ? '#09F010' : '#42FF3A';
export const brightGreen = '#5fff17';

if (lightTheme) {
	document.body.style.background = '#E1EAEE';
	document.body.style.color = '#061A44';
}

export const mainBackgroundColor = '#061A44';
export const lightBlueBackground = `background-color: ${color}`;
export const backgroundColor2 = `background-color: ${color2}`;
export const greenBackgroundColor = `background-color: ${color3}`;

export const fontColorGreen = 'color: #03A9F4';
export const fontColorWhite = 'color: white';

export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${lightTheme
	? '#A9B6FF'
	: '#121D5B'}`;
export const greenBoxShadow = lightTheme
	? 'box-shadow: inset 0px 0px 0px 1px #061a44'
	: 'box-shadow: inset 0px 0px 0px 1px #5FFF17';
export const redBoxShadow = 'box-shadow: 0px 0px 2px 2px #E41111';

export const fontSizeBig = 'font-size: 2em';
export const fontSize1 = 'font-size: 1.5em';
export const fontSize2 = 'font-size: 1.0em';
export const fontSize3 = 'font-size: .75em';

export const textAlightCenter = 'text-align: center';
