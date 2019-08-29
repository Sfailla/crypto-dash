import React from 'react';

import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';

const Dashboard = () => {
	return (
		<Page name="dashboard">
			<h1>Dashboard</h1>
			<PriceGrid />
		</Page>
	);
};

export default Dashboard;
