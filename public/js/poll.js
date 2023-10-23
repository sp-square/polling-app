const pollId = window.location.pathname.replaceAll('/', '');

async function checkIfValidPollId() {
	// Retrieve existing poll ids from db
	const dbIds = await fetch('/ids');
	const { ids } = await dbIds.json();
	// If the poll id is not in the db, redirect to home page
	if (!ids.includes(pollId)) window.location.replace('/');
}

checkIfValidPollId();
