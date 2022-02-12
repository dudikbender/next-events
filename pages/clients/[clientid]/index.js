import { useRouter } from 'next/router';

function ClientProjects() {
	const router = useRouter();

	console.log(router.query);
	const clientId = router.query.clientid;

	function loadProjectHandler() {
		// load data, etc.
		router.push({
			pathname: '/clients/[clientid]/[clientprojectid]',
			query: { clientid: clientId, clientprojectid: 'projectA' },
		});
	}

	return (
		<div>
			<h1>{clientId}'s Projects</h1>
			<button onClick={loadProjectHandler}>Load Project A</button>
		</div>
	);
}

export default ClientProjects;
