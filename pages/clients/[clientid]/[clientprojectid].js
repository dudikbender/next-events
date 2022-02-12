import { useRouter } from 'next/router';

function SelectedClientProject() {
	const router = useRouter();

	console.log(router.query);

	return (
		<div>
			<h1>Some Client's Specific Project</h1>
			<button onClick={router.back}>Go Back</button>
		</div>
	);
}

export default SelectedClientProject;
