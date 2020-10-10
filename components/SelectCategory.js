import { Select } from '@chakra-ui/core';
import React from 'react';

const SelectCountry = ({ reloadFunction }) => {
	return (
		<Select
			placeholder='Select a category'
			onChange={(e) => {
				const cName = e.target.value;
				reloadFunction(cName);
			}}
		>
			<option value='general'>General 📰</option>
			<option value='business'>Business 💵</option>
			<option value='entertainment'>Entertainment 📺</option>
			<option value='health'>Health 🚑</option>
			<option value='science'>Science 🧬</option>
			<option value='sports'>Sports ⚽</option>
			<option value='technology'>Technology 📱</option>
		</Select>
	);
};

export default SelectCountry;
