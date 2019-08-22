import React from 'react';

import { AppContext } from '../App/AppProvider';

const Page = ({ name, children }) => {
	return (
		<AppContext.Consumer>
			{({ page }) => {
				if (page !== name) {
					return null;
				}
				return <div>{children}</div>;
			}}
		</AppContext.Consumer>
	);
};

export default Page;
