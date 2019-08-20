import React from 'react';

export const AppContext = React.createContext();

class AppProvider extends React.Component {
	setPage = page => this.setState({ page });

	state = {
		page: 'dashboard',
		setPage: this.setPage
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
