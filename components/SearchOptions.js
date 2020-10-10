import React from 'react';
import { Flex, Box, Input, Button } from '@chakra-ui/core';
import SelectCountry from './SelectCountry';
import SelectCategory from './SelectCategory';

export const SearchOptions = ({
	countryChange,
	categoryChange,
	searchArticles,
}) => {
	return (
		<>
			<Box pr={5}>
				<Input
					placeholder='search for specific topics'
					width='250px'
					onKeyPress={(e) => {
						if (e.which === 13) {
							searchArticles(e.target.value);
						}
					}}
				/>
			</Box>
			<Box pr={5}>
				<SelectCountry reloadFunction={countryChange} />
			</Box>
			<Box pr={5}>
				<SelectCategory reloadFunction={categoryChange} />
			</Box>
		</>
	);
};
