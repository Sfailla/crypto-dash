import React from 'react';
import styled from 'styled-components';

export const CoinHeaderGridStyles = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
`;

export const CoinSymbol = styled.div`justify-self: right;`;

const CoinHeader = ({ name, symbol }) => {
	return (
		<CoinHeaderGridStyles>
			<div>{name}</div>
			<CoinSymbol>{symbol}</CoinSymbol>
		</CoinHeaderGridStyles>
	);
};

export default CoinHeader;
