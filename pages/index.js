import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
	Box,
	Flex,
	Button,
	Badge,
	Heading,
	Link,
	Image,
	SimpleGrid,
	Select,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Text,
} from "@chakra-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SearchOptions } from "../components/SearchOptions";

export default function Home() {
	const [articles, setArticles] = useState([]);
	const [country, setCountry] = useState("gb");
	const [category, setCategory] = useState("general");
	const [searchTerm, setSearchTerm] = useState();
	const [searchResults, setSearchResults] = useState(20);

	useEffect(() => {
		axios
			.get(
				"https://newsapi.org/v2/top-headlines?" +
					"category=" +
					category +
					"&country=" +
					country +
					"&apiKey=" +
					process.env.NEXT_PUBLIC_API_KEY
			)
			.then((res) => {
				setArticles(res.data.articles);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	function countryChange(cName) {
		axios
			.get(
				"https://newsapi.org/v2/top-headlines?country=" +
					cName +
					"&category=" +
					category +
					"&pageSize=" +
					searchResults +
					"&apiKey=" +
					process.env.NEXT_PUBLIC_API_KEY
			)
			.then((res) => {
				setCountry(cName);
				setArticles(res.data.articles);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function categoryChange(cat) {
		axios
			.get(
				"https://newsapi.org/v2/top-headlines?category=" +
					cat +
					"&country=" +
					country +
					"&pageSize=" +
					searchResults +
					"&apiKey=" +
					process.env.NEXT_PUBLIC_API_KEY
			)
			.then((res) => {
				setCategory(cat);
				setArticles(res.data.articles);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function searchArticles(q) {
		axios
			.get(
				"https://newsapi.org/v2/everything?q=" +
					q +
					"&pageSize=" +
					searchResults +
					"&apiKey=" +
					process.env.NEXT_PUBLIC_API_KEY
			)
			.then((res) => {
				console.log(res.data);
				setSearchTerm(q);
				setArticles(res.data.articles);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function resultsChange(resultsNumber) {
		setSearchResults(resultsNumber);
	}

	return (
		<>
			<Head>
				<title>Simple News</title>
				<link
					rel='icon'
					href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📰</text></svg>'
				/>
			</Head>

			<Flex
				justify='space-between'
				align='center'
				pt={5}
				pb={5}
				borderWidth='0 0 1px 0'
				flexWrap='wrap'
			>
				<Flex pl={5}>
					<Breadcrumb>
						<BreadcrumbItem>
							<Text>{country}</Text>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<Text>{category}</Text>
						</BreadcrumbItem>
					</Breadcrumb>
				</Flex>
				<Flex>
					<SearchOptions
						searchArticles={searchArticles}
						countryChange={countryChange}
						categoryChange={categoryChange}
						changeResults={resultsChange}
					/>
				</Flex>
			</Flex>

			<Flex justify='center' align='center' flexDirection='column' p={5}>
				{searchTerm && (
					<Heading pb={5} size='lg'>
						Results for - "{searchTerm}"
					</Heading>
				)}
				<SimpleGrid minChildWidth='400px' spacing={3}>
					{articles.map((article) => (
						<Box borderWidth='1px' rounded='lg' overflow='hidden' height='100%'>
							{article.urlToImage ? (
								<Image src={article.urlToImage} />
							) : (
								<div style={{ display: "flex", justifyContent: "center" }}>
									<Image src={require("../static/image-not-found.png")} />
								</div>
							)}

							<Box p='6'>
								<Link href={article.url}>
									{" "}
									<Box
										d='flex'
										alignItems='center'
										flexDirection='column'
										flexWrap='wrap'
									>
										<Heading>{article.title}</Heading>
									</Box>
								</Link>
								<Flex flexWrap='wrap' mt={2}>
									<Badge variantColor='orange' m={"20px 20px 0 0"}>
										{article.source.name}
									</Badge>
									<Badge variantColor='teal' m={"20px 20px 0 0"}>
										{article.publishedAt.split("T")[0]}
									</Badge>
									{article.author && article.author.length < 50 && (
										<Badge variantColor='blue' m={"20px 20px 0 0"}>
											{article.author}
										</Badge>
									)}
								</Flex>
							</Box>
						</Box>
					))}
				</SimpleGrid>
			</Flex>
		</>
	);
}
