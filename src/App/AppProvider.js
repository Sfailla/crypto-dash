import React from 'react';
import cc from 'cryptocompare';

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
				currentFavorite
			},
			() => {
				this.fetchPrices();
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
		this.setState({ currentFavorite: symbol });

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
		console.log();
		this.setState(prevState => ({
			maxFavorites: prevState.maxFavorites + 1
		}));
	};

	decreaseMaxFavorites = () => {
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

	state = {
		page: 'dashboard',
		favorites: [ 'BTC', 'DMD', '808', '888', 'APEX' ],
		...this.savedSettings(),
		setPage: this.setPage,
		addCoin: this.addCoin,
		removeCoin: this.removeCoin,
		isInFavorites: this.isInFavorites,
		setFilteredCoins: this.setFilteredCoins,
		confirmFavorites: this.confirmFavorites,
		setCurrentFavorite: this.setCurrentFavorite,
		increaseMaxFavorites: this.increaseMaxFavorites,
		decreaseMaxFavorites: this.decreaseMaxFavorites
	};

	MAX_FAVORITES = this.state.maxFavorites;

	fetchCoins = async () => {
		let coinList = (await cc.coinList()).Data;
		this.setState(() => ({ coinList }));
	};

	componentDidMount = () => {
		this.fetchCoins();
		this.fetchPrices();
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
