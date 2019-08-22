import React from 'react';

export const AppContext = React.createContext();

class AppProvider extends React.Component {
	setPage = page => this.setState({ page });

	savedSettings = () => {
		let cryptoData = JSON.parse(
			localStorage.getItem('cryptoDash')
		);
		if (!cryptoData) {
			return {
				page: 'settings',
				firstVisit: true
			};
		}
		return {};
	};

	confirmFavorites = () => {
		this.setState({
			firstVisit: false,
			page: 'dashboard'
		});
		localStorage.setItem(
			'cryptoDash',
			JSON.stringify({
				test: 'hello'
			})
		);
	};

	state = {
		page: 'dashboard',
		...this.savedSettings(),
		setPage: this.setPage,
		confirmFavorites: this.confirmFavorites
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
