import Head from 'next/head';

import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>NextJS Events App</title>
				<meta name='description' content='An app for events for NextJS'/>
				<meta name='viewport' content='initial-scale=1 width=device-width'/>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
