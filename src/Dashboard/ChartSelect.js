import styled from 'styled-components';
import {
	backgroundColor2,
	fontSize2,
	lightTheme
} from '../Shared/Styles';

export default styled.select`
	${backgroundColor2};
	${fontSize2};
	color: ${lightTheme ? 'black' : '#5fff17'};
	margin: 10px;
`;
