import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from '../App/AppProvider';

export const CoinGridStyles = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
`;

const CoinGrid = () => {
	return (
		<AppContext.Consumer>
			{({ coinList }) => (
				<CoinGridStyles>
					{Object.keys(coinList).map((coinKey, idx) => (
						<div key={idx}>{coinKey}</div>
					))}
				</CoinGridStyles>
			)}
		</AppContext.Consumer>
	);
};

export default CoinGrid;
