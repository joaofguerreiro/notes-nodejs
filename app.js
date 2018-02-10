// Loads a built-in module fs
const fs =  require('fs');

// Loads a built-in module os
const os = require('os');

// Loads an external module that was retrieved from npm
// require() will look for a core module named 'lodash'
// Since it doesn't find one, it then looks into the node_modules folder
const _ = require('lodash');
const yargs = require('yargs');

// Loads a file using a relative path
const notes = require('./notes.js');

// Re-usable variables
var titleOptions = {
	// Details of argument title
	describe: 'Title of note',
	demand: true, // required
	alias: 't',
};

var bodyOptions = {
	describe: 'Body of note',
	demand: true, // required
	alias: 'b',
};

// Documentate the available commands in our app
const argv = yargs
	.command('add', 'Add a new note', {
		// Arguments of command
		title: titleOptions,
		body: bodyOptions,
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', {
		// Arguments of command
		title: titleOptions,
	})
	.command('remove', 'Remove a note', {
		// Arguments of command
		title: titleOptions,
	})
	.help().argv;


// argv stands for arguments vector (array)
// Grabs the argument we pass in when executing app.js
var command = argv._[0];
// console.log('Command:', command);
// console.log('Process:', process.argv);


// console.log('Yargs :', argv);

if (command == 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Your note was added:');
		notes.logNote(note);
	} else {
		console.log('The note you tried to add, already exists!');
	}

} else if (command == 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);

	// This is how to iterate an array in Nodejs
	allNotes.forEach((note) => notes.logNote(note));
} else if (command == 'read') {
	var note = notes.readNote(argv.title);
	if (note) {
		console.log('Your note:');
		notes.logNote(note);
	} else {
		console.log('Note was not found!');
	}
} else if (command == 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);
} else {
	console.log('Command not recognized');
}

 
// Removes duplicates from an array. It keeps the first occurrence
// var filteredArray = _.uniq(['João', 1, 'João', 1, 2, 3, 4]);
// console.log(filteredArray);


// Returns a bool value after checking if value is string or not
// console.log(_.isString(true));
// console.log(_.isString('João'));


// Retrieves the current system user
// var user = os.userInfo();
// Creates the file and appends a string to it
// fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
