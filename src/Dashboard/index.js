import React from 'react';
import styled from 'styled-components';

import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import CoinSpotlight from './CoinSpotlight';

const ChartGridStyle = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-gap: 15px;
`;

const Dashboard = () => {
	return (
		<Page name="dashboard">
			<h2>Dashboard</h2>
			<PriceGrid />
			<ChartGridStyle>
				<CoinSpotlight />
				<div>Grid for spotlight coin</div>
			</ChartGridStyle>
		</Page>
	);
};

export default Dashboard;
