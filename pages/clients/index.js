import Link from 'next/link';

function ClientsPage() {
	const clients = [
		{ id: 'max', name: 'Maximillian' },
		{ id: 'david', name: 'Dudik' },
		{ id: 'manu', name: 'Manual' },
	];

	return (
		<div>
			<h1>The Clients Page</h1>
			<ul>
				{clients.map((client) => (
					<li key={client.id}>
						<Link
							href={{
								pathname: '/clients/[clientid]',
								query: { clientid: client.id },
							}}
						>
							{client.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ClientsPage;
