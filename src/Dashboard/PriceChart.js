import React from 'react';
import ReactHighcharts from 'react-highcharts';

import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import HighchartsTheme from './HighchartsTheme';
import HighchartsConfig from './HighchartsConfig';

// Apply the theme
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceChart = () => {
	return (
		<AppContext.Consumer>
			{({ historical }) => (
				<Tile>
					<ReactHighcharts config={HighchartsConfig(historical)} />
				</Tile>
			)}
		</AppContext.Consumer>
	);
};

export default PriceChart;
