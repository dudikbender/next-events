import Link from 'next/link';

function HomePage() {
	return (
		<div>
			<h1>Portfolio App</h1>
			<h3>Useful for seeing routing and nested page structures.</h3>
			<ul>
				<li>
					<Link href='/portfolio'>Portfolio</Link>
				</li>
				<li>
					<Link href='/clients'>Clients</Link>
				</li>
			</ul>
		</div>
	);
}

export default HomePage;
