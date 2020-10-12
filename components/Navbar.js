import React from 'react';
import { Flex, Link, Heading, Select, Image } from '@chakra-ui/core';

const Navbar = () => {
	return (
		<>
			<Flex justify='center' align='center' p={'19px 0 0 0'}>
				<Link href='/' style={{ textDecoration: 'none' }}>
					<Heading>Simple News</Heading>
				</Link>
			</Flex>
		</>
	);
};

export default Navbar;
