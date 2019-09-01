import React from 'react';
import ReactHightcharts from 'react-highcharts';

import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import HightchartsConfig from './HighchartsConfig';

const PriceChart = () => {
	return (
		<AppContext.Consumer>
			{({ coinList }) => (
				<Tile>
					<ReactHightcharts config={HightchartsConfig()} />
				</Tile>
			)}
		</AppContext.Consumer>
	);
};

export default PriceChart;
