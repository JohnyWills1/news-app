import React from 'react';
import { Flex, Link, Heading } from '@chakra-ui/core';

const Navbar = () => {
	return (
		<>
			<Flex justify='space-between' p={5} borderBottom='1px'>
				<Heading>Simple News</Heading>
				<Link>t</Link>
			</Flex>
		</>
	);
};

export default Navbar;
