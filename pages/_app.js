import '../styles/globals.css';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<CSSReset />
			<Navbar />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
