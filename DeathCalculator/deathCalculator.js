// Run this JS file in terminal with command: node DeathCalculator/deathCalculator.js OR node deathCalculator.js

var prompt = require('readline-sync');

let userIsAdude = prompt.question('Are you a dude? (Y/N) ');
if (userIsAdude.toUpperCase() === 'Y') {
    userIsAdude = true;
    console.log('Hey, dude!');
} else if (userIsAdude.toUpperCase() === 'N') {
    userIsAdude = false;
    console.log('Hello, dudette!');
} else {
    console.log("I'm sorry, I didn't understand your response.");
}
console.log("I see the answer to user is a dude: " + userIsAdude + ".");

let userBirthYear = prompt.question('What is your year of birth (YYYY)? ');
let userBirthMonth = prompt.question('What is your month of birth (MM)? ');
let userBirthDay = prompt.question('What is your day of birth (DD)? ');
console.log('Your DOB (YYYY/MM/DD) is: ' + userBirthYear + ` ` + userBirthMonth + ` ` + userBirthDay);
let userBirthDate = new Date(userBirthYear, userBirthMonth, userBirthDay);

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDay = new Date().getDate();
console.log('Current date (YYYY/MM/DD) is: ' + currentYear + ` ` + currentMonth + ` ` + currentDay)
let currentDate = new Date(currentYear, currentMonth, currentDay);

// Calculate the difference between the current date and the user's birth date
let ageDuration = currentDate - userBirthDate;

// Convert the duration to years
let userAgeInMilliseconds = ageDuration.valueOf();
let millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // account for leap years
let userAgeInYears = userAgeInMilliseconds / millisecondsPerYear;

// Round the age to the nearest integer
let age = Math.round(userAgeInYears);

// Print the user's age
console.log('Your age is ' + age + ' years.');





const sqlite3 = require('sqlite3').verbose();

// Open a database connection
let db = new sqlite3.Database('data/deathData.db');

// Run a query
const sql = `SELECT * FROM deathChart WHERE exactAge =  ${age}`;
console.log(sql);
db.all(sql, function(err, rows) {
    if (err) {
        console.error(err.message);
    }
    // Process the query results
    rows.forEach(row => console.log(row));
});

// Close the database connection
db.close();