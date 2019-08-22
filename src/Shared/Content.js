import React from 'react';
import { AppContext } from '../App/AppProvider';

const Content = ({ children }) => {
	return (
		<AppContext.Consumer>
			{({ coinList }) => {
				if (!coinList) {
					return <div>Loading Coins...</div>;
				}
				return <div>{children}</div>;
			}}
		</AppContext.Consumer>
	);
};

export default Content;
