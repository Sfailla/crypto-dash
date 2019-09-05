import React from 'react';
import moment from 'moment';

const cc = require('cryptocompare');
cc.setApiKey(
	'3cbc74b06166bb8f7c93169a3fc6ff3f060f6e93c11bb793fffa3e6d923d2964'
);

export const AppContext = React.createContext();

class AppProvider extends React.Component {
	setPage = page => this.setState({ page });

	savedSettings = () => {
		let cryptoData = JSON.parse(localStorage.getItem('cryptoDash'));
		if (!cryptoData) {
			return {
				page: 'settings',
				firstVisit: true,
				maxFavorites: 5
			};
		} else {
			let { favorites, maxFavorites, currentFavorite } = cryptoData;
			return { favorites, maxFavorites, currentFavorite };
		}
	};

	confirmFavorites = () => {
		let currentFavorite = this.state.favorites[0];

		this.setState(
			{
				firstVisit: false,
				page: 'dashboard',
				maxFavorites: this.state.maxFavorites,
				currentFavorite,
				prices: null,
				historical: null
			},
			() => {
				this.fetchPrices();
				this.fetchHistorical();
			}
		);
		localStorage.setItem(
			'cryptoDash',
			JSON.stringify({
				favorites: this.state.favorites,
				maxFavorites: this.state.maxFavorites,
				currentFavorite
			})
		);
	};

	setCurrentFavorite = symbol => {
		this.setState(
			{ currentFavorite: symbol, historical: null },
			this.fetchHistorical
		);

		localStorage.setItem(
			'cryptoDash',
			JSON.stringify({
				...JSON.parse(localStorage.getItem('cryptoDash')),
				currentFavorite: symbol
			})
		);
	};

	addCoin = key => {
		let favorites = [ ...this.state.favorites ];
		if (favorites.length < this.state.maxFavorites) {
			favorites.push(key);
			this.setState({ favorites });
		}
	};

	removeCoin = key => {
		let favorites = [ ...this.state.favorites ];
		this.setState(() => ({
			favorites: favorites.filter(coins => {
				return coins !== key;
			})
		}));
	};

	isInFavorites = key => {
		let favorites = [ ...this.state.favorites ];
		return favorites.includes(key);
	};

	setFilteredCoins = filteredCoins => {
		this.setState({ filteredCoins });
	};

	increaseMaxFavorites = () => {
		console.log(this.state.maxFavorites + 1);
		this.setState(prevState => ({
			maxFavorites: prevState.maxFavorites + 1
		}));
	};

	decreaseMaxFavorites = () => {
		console.log(this.state.maxFavorites - 1);
		this.setState(prevState => ({
			maxFavorites: prevState.maxFavorites - 1
		}));
	};

	fetchPrices = async () => {
		if (this.state.firstVisit) return;
		let prices = await this.prices();
		prices = prices.filter(price => Object.keys(price).length);
		this.setState({ prices });
	};

	prices = async () => {
		let returnData = [];
		for (let i = 0; i < this.state.favorites.length; i++) {
			try {
				let priceData = await cc.priceFull(
					this.state.favorites[i],
					'USD'
				);
				returnData.push(priceData);
			} catch (error) {
				console.warn(error);
			}
		}
		return returnData;
	};

	fetchHistorical = async () => {
		if (this.state.firstVisit) return;
		let results = await this.historical();
		let historical = [
			{
				name: this.state.currentFavorite,
				data: results.map((ticker, idx) => [
					moment()
						.subtract({
							[this.state.timeInterval]: this.TIME_UNITS - idx
						})
						.valueOf(),
					ticker.USD
				])
			}
		];
		this.setState({ historical });
	};

	historical = () => {
		let promises = [];
		for (let units = this.TIME_UNITS; units > 0; units--) {
			promises.push(
				cc.priceHistorical(
					this.state.currentFavorite,
					[ 'USD' ],
					moment().subtract({ months: units }).toDate()
				)
			);
		}
		return Promise.all(promises);
	};

	changeChartSelect = value => {
		this.setState(
			{ timeInterval: value, historical: null },
			this.fetchHistorical
		);
	};

	state = {
		page: 'dashboard',
		favorites: [ 'BTC', 'DMD', '808', '888', 'APEX' ],
		...this.savedSettings(),
		setPage: this.setPage,
		addCoin: this.addCoin,
		timeUnits: 10,
		removeCoin: this.removeCoin,
		timeInterval: 'months',
		isInFavorites: this.isInFavorites,
		setFilteredCoins: this.setFilteredCoins,
		confirmFavorites: this.confirmFavorites,
		changeChartSelect: this.changeChartSelect,
		setCurrentFavorite: this.setCurrentFavorite,
		increaseMaxFavorites: this.increaseMaxFavorites,
		decreaseMaxFavorites: this.decreaseMaxFavorites
	};

	MAX_FAVORITES = this.state.maxFavorites;
	TIME_UNITS = this.state.timeUnits;

	fetchCoins = async () => {
		let coinList = (await cc.coinList()).Data;
		this.setState(() => ({ coinList }));
	};

	componentDidMount = () => {
		this.fetchCoins();
		this.fetchPrices();
		this.fetchHistorical();
	};

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}

export default AppProvider;
