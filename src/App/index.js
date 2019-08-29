import React, { Component } from 'react';
import './App.css';

import AppProvider from './AppProvider';

import AppLayout from './AppLayout';
import AppBar from './AppBar';
import Settings from '../Settings';
import Content from '../Shared/Content';
import Dashboard from '../Dashboard';

class App extends Component {
	render() {
		return (
			<div>
				<AppLayout>
					<AppProvider>
						<AppBar />
						<Content>
							<Dashboard />
							<Settings />
						</Content>
					</AppProvider>
				</AppLayout>
			</div>
		);
	}
}

export default App;
