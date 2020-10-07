import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
	Box,
	Flex,
	Button,
	Heading,
	Link,
	Image,
	SimpleGrid,
} from '@chakra-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Home() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://newsapi.org/v2/top-headlines?country=gb&apiKey=' +
					process.env.NEXT_APP_API_KEY
			)
			.then((res) => {
				console.log(res.data);
				setArticles(res.data.articles);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<Head>
				<title>News Search</title>
				<link
					rel='icon'
					href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📰</text></svg>'
				/>
			</Head>

			<Flex justify='center' align='center' flexDirection='column' m={5} p={5}>
				<SimpleGrid columns={5} spacing={3}>
					{articles.map((article) => (
						<Box borderWidth='1px' rounded='lg' overflow='hidden' maxW='sm'>
							<Image src={article.urlToImage} />

							<Link href={article.url}>
								<Box p='6'>
									<Box d='flex' alignItems='center' flexDirection='column'>
										<Heading>{article.title}</Heading>
									</Box>
								</Box>
							</Link>
						</Box>
					))}
				</SimpleGrid>
			</Flex>
		</>
	);
}
