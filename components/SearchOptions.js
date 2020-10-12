import React, { useState } from "react";
import {
	Flex,
	Box,
	Input,
	Button,
	Select,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Text,
} from "@chakra-ui/core";
import SelectCountry from "./SelectCountry";
import SelectCategory from "./SelectCategory";

export const SearchOptions = ({
	countryChange,
	categoryChange,
	searchArticles,
	changeResults,
}) => {
	const [results, setResults] = useState(20);

	return (
		<>
			<Box pr={5}>
				<Input
					placeholder='Search for specific topics'
					width='250px'
					onKeyPress={(e) => {
						if (e.which === 13) {
							searchArticles(e.target.value);
						}
					}}
				/>
			</Box>
			<Box pr={5}>
				<Text>Number of Results: {results}</Text>
				<Slider
					defaultValue={20}
					max={100}
					min={20}
					step={5}
					onChange={(e) => {
						setResults(e);
						changeResults(e);
					}}
				>
					<SliderTrack />
					<SliderFilledTrack />
					<SliderThumb />
				</Slider>
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
