const express = require('express');
const { readDb, writeDb } = require('./db/dbFunctions');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// Post a new question
app.post('/', (req, res) => {
	const { id, question, options } = req.body;

	if (!id || !question || options.length === 0)
		return res
			.status(400)
			.send({ status: 'error', message: 'Please provide all required data.' });
	console.log(id, question, options);
	const currentPolls = readDb();
	// writeDb({ ...currentPolls, [id]: { question, options } });
	writeDb({
		...currentPolls,
		[id]: {
			question,
			options: options.reduce((acc, curr) => {
				return { ...acc, [curr]: 0 };
			}, {}),
		},
	});
	res.sendStatus(200);
});

// Retrieve all ids used for polls
app.get('/ids', (req, res) => {
	const ids = readDb();
	res.status(200).send({ ids: Object.keys(ids) });
});

// Retrieve a specific poll by id
app.get('/:id', (req, res) => {
	console.log(req.params.id);
	try {
		res.status(200).sendFile('poll.html', { root: __dirname + '/public' });
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
