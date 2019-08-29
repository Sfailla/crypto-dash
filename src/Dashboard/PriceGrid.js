import React from 'react';
import styled from 'styled-components';

import { AppContext } from '../App/AppProvider';
import PriceDisplay from './PriceDisplay';

const PriceGridStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
	margin-top: 40px;
`;

const PriceGrid = () => {
	return (
		<AppContext.Consumer>
			{({ prices }) => (
				<PriceGridStyle>
					{prices.map((price, index) => (
						<PriceDisplay key={index} index={index} price={price} />
					))}
				</PriceGridStyle>
			)}
		</AppContext.Consumer>
	);
};

export default PriceGrid;
