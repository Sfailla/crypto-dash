import React from 'react';

import WelcomeMessage from '../Settings/WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';

const Settings = () => {
	return (
		<Page name="settings">
			<WelcomeMessage />
			<ConfirmButton />
		</Page>
	);
};

export default Settings;
