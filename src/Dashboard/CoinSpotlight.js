import React from 'react';
import styled from 'styled-components';

import CoinImage from '../Shared/CoinImage';
import { AppContext } from '../App/AppProvider';
import { Tile } from '../Shared/Tile';

const SpotlightName = styled.div`
	padding-bottom: 10px;
	font-size: 20px;
	text-align: center;
	text-transform: uppercase;
`;

const CoinSpotlight = ({ className }) => {
	return (
		<AppContext.Consumer>
			{({ currentFavorite, coinList }) => (
				<Tile>
					<SpotlightName>
						{coinList[currentFavorite].CoinName}
					</SpotlightName>
					<CoinImage
						alt={coinList.CoinName}
						className={className}
						coin={coinList[currentFavorite]}
						spotlight
					/>
				</Tile>
			)}
		</AppContext.Consumer>
	);
};

export default CoinSpotlight;
