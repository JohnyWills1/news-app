import React, { useState } from 'react';
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
	Icon,
} from '@chakra-ui/core';

export const SearchOptions = ({
	searchArticles,
	changeResults,
	changeSortBy,
}) => {
	const [results, setResults] = useState(20);

	return (
		<>
			<Box pr={5}>
				<Input
					placeholder='Search for specific topics'
					width='100%'
					onKeyPress={(e) => {
						if (e.which === 13) {
							searchArticles(e.target.value);
						}
					}}
				/>
			</Box>
			<Box pr={5}>
				<Select
					onChange={(e) => {
						changeSortBy(e.target.value);
					}}
				>
					<option value='relevancy'>Relevancy</option>
					<option value='popularity'>Popularity</option>
					<option value='publishedAt'>Published At</option>
				</Select>
			</Box>
			<Box>
				<Text>Number of Results: {results}</Text>
				<Slider
					defaultValue={results}
					max={100}
					min={20}
					step={5}
					color='green'
					onChange={(e) => {
						setResults(e);
						changeResults(e);
					}}
				>
					<SliderTrack />
					<SliderFilledTrack />
					<SliderThumb size={6}>
						<Icon name='search' color='green.500' />
					</SliderThumb>
				</Slider>
			</Box>
		</>
	);
};
