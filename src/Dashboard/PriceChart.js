import React from 'react';
import ReactHighcharts from 'react-highcharts';

import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import HighchartsTheme from './HighchartsTheme';
import HighchartsConfig from './HighchartsConfig';
import ChartSelect from './ChartSelect';

// Apply the theme
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceChart = () => {
	return (
		<AppContext.Consumer>
			{({ historical, changeChartSelect }) => (
				<Tile>
					<ChartSelect
						defaultValue="months"
						onChange={event => changeChartSelect(event.target.value)}
					>
						<option value="days">Days</option>
						<option value="weeks">Weeks</option>
						<option value="months">Months</option>
					</ChartSelect>
					<ReactHighcharts config={HighchartsConfig(historical)} />
				</Tile>
			)}
		</AppContext.Consumer>
	);
};

export default PriceChart;
