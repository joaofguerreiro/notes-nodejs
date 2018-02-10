// var obj = {
// 	name: 'João'
// };

// Converts an object into a JSON
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "João","age": 25}';
// Converts a JSON back into an object (or array if it's the case)
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

// Loads the built-in module 'fs'
const fs = require('fs');

var originalNote = {
	title: 'Some title',
	body: 'This is the body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
