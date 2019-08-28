import React from 'react';
import styled from 'styled-components';
import fuzzy from 'fuzzy';

import { AppContext } from '../App/AppProvider';
import { debounce, includes } from '../Shared/UtilityFunctions';
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

const handleFilter = debounce(
	(searchVal, coinList, setFilteredCoins) => {
		// get all coin symbols
		let coinSymbols = Object.keys(coinList);
		// get all the coin names.  map symbol to name
		let coinNames = coinSymbols.map(
			symbol => coinList[symbol].CoinName
		);
		let allStringsToSearch = coinSymbols.concat(coinNames);
		let fuzzyResults = fuzzy
			.filter(searchVal, allStringsToSearch, {})
			.map(result => result.string);

		let filteredCoins = Object.fromEntries(
			Object.entries(coinList).filter(([ symKey, coinVal ]) => {
				let coinName = coinVal.CoinName;
				return (
					includes(fuzzyResults, symKey) ||
					includes(fuzzyResults, coinName)
				);
			})
		);
		console.log(filteredCoins);
		setFilteredCoins(filteredCoins);
	},
	500
);

const filterCoins = (event, setFilteredCoins, coinList) => {
	let searchVal = event.target.value;
	handleFilter(searchVal, coinList, setFilteredCoins);
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
