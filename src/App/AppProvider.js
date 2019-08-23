import React from 'react';
import cc from 'cryptocompare';

export const AppContext = React.createContext();

const MAX_FAVORITES = 5;

class AppProvider extends React.Component {
	setPage = page => this.setState({ page });

	savedSettings = () => {
		let cryptoData = JSON.parse(localStorage.getItem('cryptoDash'));
		if (!cryptoData) {
			return {
				page: 'settings',
				firstVisit: true
			};
		} else {
			let { favorites } = cryptoData;
			return { favorites };
		}
	};

	confirmFavorites = () => {
		this.setState({
			firstVisit: false,
			page: 'dashboard'
		});
		localStorage.setItem(
			'cryptoDash',
			JSON.stringify({
				favorites: this.state.favorites
			})
		);
	};

	addCoin = key => {
		let favorites = [ ...this.state.favorites ];
		if (favorites.length < MAX_FAVORITES) {
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

	state = {
		page: 'dashboard',
		favorites: [ 'BTC', 'DMD', '808', '888', 'APEX' ],
		...this.savedSettings(),
		setPage: this.setPage,
		addCoin: this.addCoin,
		removeCoin: this.removeCoin,
		isInFavorites: this.isInFavorites,
		confirmFavorites: this.confirmFavorites
	};

	fetchCoins = async () => {
		let coinList = (await cc.coinList()).Data;
		this.setState(() => ({ coinList }));
	};

	componentDidMount = () => {
		this.fetchCoins();
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
