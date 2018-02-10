// Loads a built-in module fs
const fs = require('fs');

// module.exports allows to export anything to any file that requires notes.js
// module.exports.addNote = function() {
// 	console.log('addNote');
// 	return 'New note';
// }

var fetchNotes = () => {
	// Attempts to execute some code, has a fallback if it fails
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (e) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var logNote = (note) => {
	console.log('-----');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	}

	// ES6 Syntax
	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		// Adds one item to the array
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

var getAll = () => {
	return fetchNotes();
};

var readNote = (title) => {
	var notes = fetchNotes();
	// ES6 Syntax
	var filteredNotes = notes.filter((note) => note.title === title);
	return filteredNotes[0];
};

var removeNote = (title) => {
	notes = fetchNotes();
	// ES6 Syntax
	var filteredNotes = notes.filter((note) => note.title !== title);
	saveNotes(filteredNotes);
	// True if note was removed
	return notes.length !== filteredNotes.length;
}

module.exports = {
	addNote, // similar to addNote: addNote, using ES6 syntax (key and value are the same)
	getAll, // similar to getAll: getAll, using ES6 syntax (key and value are the same)
	readNote,
	removeNote,
	logNote,
}
