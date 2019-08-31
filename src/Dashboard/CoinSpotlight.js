import React from 'react';
import styled from 'styled-components';

import CoinImage from '../Shared/CoinImage';
import { AppContext } from '../App/AppProvider';
import { Tile } from '../Shared/Tile';

const SpotlightName = styled.div`
	padding-bottom: 10px;
	text-align: center;
`;

const CoinSpotlight = () => {
	return (
		<AppContext.Consumer>
			{({ currentFavorite, coinList }) => (
				<Tile>
					<SpotlightName>
						{coinList[currentFavorite].CoinName}
					</SpotlightName>
					<CoinImage coin={coinList[currentFavorite]} />
				</Tile>
			)}
		</AppContext.Consumer>
	);
};

export default CoinSpotlight;
