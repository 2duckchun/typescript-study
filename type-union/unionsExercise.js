// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff = [];
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors = [{ r: 1, g: 5, b: 2 }, { h: 1, s: 2, l: 3 }];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(params) {
    if (typeof params === "string") {
        console.log("Hello, ".concat(params));
    }
    else {
        for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
            var name_1 = params_1[_i];
            console.log("Hello, ".concat(name_1));
        }
    }
}
