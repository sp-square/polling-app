const fs = require('fs');

function readDb(dbName = 'db.json') {
	console.log(dbName);
	// read JSON object from file
	const data = fs.readFileSync(`db/${dbName}`, 'utf8') || '{}';
	console.log(data);
	return JSON.parse(data);
}

function writeDb(obj, dbName = 'db.json') {
	console.log('obj', obj);
	if (!obj) return console.log('Please provide data to save');
	try {
		fs.writeFileSync(`db/${dbName}`, JSON.stringify(obj)); //overwrites current data
		return console.log('Data successfully saved to db.json');
	} catch (err) {
		return console.log('Failed to save data to db.json');
	}
}

module.exports = { readDb, writeDb };
