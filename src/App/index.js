import React, { Component } from 'react';
import './App.css';

import AppProvider from './AppProvider';

import WelcomeMessage from './WelcomeMessage';
import AppLayout from './AppLayout';
import AppBar from './AppBar';

class App extends Component {
	render() {
		return (
			<div>
				<AppLayout>
					<AppProvider>
						<AppBar />
						<WelcomeMessage />
					</AppProvider>
				</AppLayout>
			</div>
		);
	}
}

export default App;
