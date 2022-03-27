import Head from 'next/head';

import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';
import classes from '../styles/Home.module.css';
import NewsletterRegistration from '../components/input/newsletter-registration'

function HomePage(props) {
	return (
		<div className='center'>
			<Head>
				<title>NextJS Events Home</title>
				<meta 
				name='description' 
				content='Search here for great events'/>
			</Head>
			<NewsletterRegistration />
			<h1 className={classes.title}>Featured Events</h1>
			<EventList items={props.events} />
		</div>
	);
}

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents();
	return {
		props: {
			events: featuredEvents,
		},
		revalidate: 1800,
	};
}

export default HomePage;
