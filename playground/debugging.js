// To debug script on a terminal:
// nodemon inspect debugging.js

// To debug script using Chrome's Dev tools:
// nodemon --inspect-brk playground/debugging.js
var person = {
	name: 'João'
};

person.age = 25;

// Node inspector wil stop in line 8
debugger; 

person.name = 'Mike';

console.log(person);
