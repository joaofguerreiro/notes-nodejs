// ES6 Syntax for function definition
// var square = (x) => {
// 	var result = x * x;
// 	return result;
// };

// Simplified version of the above
var square = x => x * x;
console.log(square(9));

var user = {
	name: 'João',
	sayHi: () => {
		// Global arguments because of the function syntax
		console.log(arguments);
		console.log(`Hi, I'm ${this.name}`);
	},
	// Regular function
	sayHiAlt() {
		// Local arguments because of the function syntax
		console.log(arguments);
		console.log(`Hi, I'm ${this.name}`);
	}
};
user.sayHi(1, 2, 3);
