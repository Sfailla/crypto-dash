import React from 'react';
import styled, { css } from 'styled-components';

import { AppContext } from '../App/AppProvider';
import { lightTheme } from '../Shared/Styles';

const CoinInputWrapperStyle = styled.div`
	height: 40px;
	width: 150px;
	border: 2px solid ${lightTheme ? '#061a44' : '#ddd'};
	display: inline-flex;
`;

const CoinInputBtnStyle = styled.button`
	::before,
	::after {
		display: inline-block;
		position: absolute;
		content: '';
		width: 1rem;
		height: 2px;
		background-color: ${lightTheme ? '#061a44' : '#42ff3a'};
		transform: translate(-50%, -50%);
	}
	::after {
		${props =>
			props.plus &&
			css`
				transform: translate(-50%, -50%) rotate(90deg);
			`};
	}
	outline: none;
	-webkit-appearance: textfield;
	background-color: transparent;
	border: none;
	align-items: center;
	justify-content: center;
	width: 3rem;
	height: 100%;
	cursor: pointer;
	margin: 0;
	position: relative;
	color: #42ff3a;
`;

const CoinInputStyle = styled.input`
  -webkit-inner-spin-button: 
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none; 
    margin: 0; 
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none; 
    margin: 0; 
  }
  font-family: sans-serif;
  max-width: 4rem;
  padding: .5rem;
  border: ${lightTheme ? 'solid #061a44' : 'solid #ddd'};
  border-width: 0 2px;
  font-size: 2rem;
  height: 100%;
  font-weight: bold;
  text-align: center;
  color: ${lightTheme ? '#061a44' : '#42FF3A'};
  background: transparent;
`;

const MaxCoinInput = () => {
	return (
		<AppContext.Consumer>
			{({
				maxFavorites,
				increaseMaxFavorites,
				decreaseMaxFavorites
			}) => (
				<CoinInputWrapperStyle>
					<CoinInputBtnStyle onClick={() => decreaseMaxFavorites()} />
					<CoinInputStyle
						type="text"
						value={maxFavorites}
						onChange={e => e.target.value}
					/>
					<CoinInputBtnStyle
						onClick={() => increaseMaxFavorites()}
						plus
					/>
				</CoinInputWrapperStyle>
			)}
		</AppContext.Consumer>
	);
};

export default MaxCoinInput;
