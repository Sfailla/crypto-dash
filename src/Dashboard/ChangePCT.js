import React from 'react';
import styled, { css } from 'styled-components';

import { numberFormatter } from '../Shared/UtilityFunctions';

const ChangePct = styled.div`
	color: green;
	${props => props.red && css`color: red;`};
`;

const JustifyRight = styled.div`justify-self: right;`;

const ChangePCT = ({ data }) => {
	return (
		<JustifyRight>
			<ChangePct red={data.CHANGEPCT24HOUR < 0}>
				{numberFormatter(data.CHANGEPCT24HOUR)}%
			</ChangePct>
		</JustifyRight>
	);
};

export default ChangePCT;
