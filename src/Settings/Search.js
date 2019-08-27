import React from 'react';
import styled from 'styled-components';

import { AppContext } from '../App/AppProvider';

import { fontSize2 } from '../Shared/Styles';

const SearchGrid = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-column-gap: 10px;
`;

const SearchInput = styled.input`
	${fontSize2};
	padding-left: 10px;
	color: white;
	width: 200px;
	height: 20px;
	align-self: center;
  justify-self: left;
  background: transparent
  outline: none;
	border: none;
	border-bottom: 2px solid white;
`;

const debounce = (inner, ms) => {
	let timer = null;
	let resolves = [];

	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			let result = inner(...args);
			resolves.map(res => res(result));
			resolves = [];
		}, ms);

		return new Promise(res => resolves.push(res));
	};
};

const handleFilter = debounce(
	(searchVal, coinList, setFilteredCoins) => {
		console.log(searchVal);
	},
	500
);

const filterCoins = (event, setFilteredCoins, coinList) => {
	let searchVal = event.target.value;

	handleFilter(searchVal, coinList, setFilteredCoins);
	// console.log(Object.entries(coinList));
	// if (coinList.contains)
};

const Search = () => {
	return (
		<AppContext.Consumer>
			{({ setFilteredCoins, coinList }) => (
				<SearchGrid>
					<h2>Coin Search</h2>
					<SearchInput
						onKeyUp={event => {
							return filterCoins(event, setFilteredCoins, coinList);
						}}
					/>
				</SearchGrid>
			)}
		</AppContext.Consumer>
	);
};

export default Search;
