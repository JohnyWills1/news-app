import React from 'react';
import { Box } from '@chakra-ui/core';
import SelectCountry from './SelectCountry';
import SelectCategory from './SelectCategory';

export const SelectOptions = ({ countryChange, categoryChange }) => {
	return (
		<>
			<Box pr={5}>
				<SelectCountry reloadFunction={countryChange} />
			</Box>
			<Box pr={5}>
				<SelectCategory reloadFunction={categoryChange} />
			</Box>
		</>
	);
};
