import React from 'react';
import { AppContext } from '../App/AppProvider';
import {
	SelectableTile,
	DisabledTile,
	DeletableTile
} from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

const ClickCoinHandler = (
	topSection,
	coinKey,
	addCoin,
	removeCoin
) => {
	return topSection
		? () => {
				removeCoin(coinKey);
			}
		: () => {
				addCoin(coinKey);
			};
};

const CoinTile = ({ coinKey, topSection }) => {
	return (
		<AppContext.Consumer>
			{({ coinList, addCoin, removeCoin, isInFavorites }) => {
				let coin = coinList[coinKey];
				let TileClass = SelectableTile;
				if (topSection) {
					TileClass = DeletableTile;
				} else if (isInFavorites(coinKey)) {
					TileClass = DisabledTile;
				}
				return (
					<TileClass
						onClick={ClickCoinHandler(
							topSection,
							coinKey,
							addCoin,
							removeCoin
						)}
					>
						<CoinHeaderGrid
							topSection={topSection}
							name={coin.CoinName}
							symbol={coin.Symbol}
						/>
						<CoinImage coin={coin} />
					</TileClass>
				);
			}}
		</AppContext.Consumer>
	);
};

export default CoinTile;
