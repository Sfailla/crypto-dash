import React from 'react';
import styled from 'styled-components';
import { backgroundColor2, fontSize2 } from '../Shared/Styles';

const SearchGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const SearchInput = styled.input`
	${backgroundColor2};
	${fontSize2};
	padding-left: 10px;
	color: white;
	width: 200px;
	height: 20px;
	align-self: center;
	justify-self: left;
`;

const Search = () => {
	return (
		<SearchGrid>
			<h2>Coin Search</h2>
			<SearchInput />
		</SearchGrid>
	);
};

export default Search;
