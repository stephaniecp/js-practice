// Required before running (MacOS steps): 
// 1. Install Node.js (https://nodejs.org/en/download/)
// 2. npm install readline-sync (command: npm i readline-sync)

// Run this JS file in terminal with command: node dogNames.js

var prompt = require('readline-sync');
var breed = prompt.question('What breed is your dog?');
console.log(breed);
// Let's user input dog breed in terminal
// Prints out the dog breed in terminal

var  dogs = {
    terrier: 'Suzy',
    husky: 'Sir Sniffybums III',
    pug: 'Notorious P.U.G.'
};
console.log('Your dog\'s name is ' + dogs[breed] + '? How fascinating!');
// Let's user input dog breed in terminal
// If they answer either of the three breeds, it will print out the dog's name in a concanetated string
// If they answer with any other value, it will print out undefined

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
