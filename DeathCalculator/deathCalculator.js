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
    throw new error ("I'm sorry, I didn't understand your response. The program will now exit.");
}
console.log("I see the answer to user is a dude: " + userIsAdude + ".");

// // Old funtion variables
// let userBirthYear = prompt.question('What is your year of birth (YYYY)? ');
// let userBirthMonth = prompt.question('What is your month of birth (MM)? ');
// let userBirthDay = prompt.question('What is your day of birth (DD)? ');
// console.log('Your DOB (YYYY/MM/DD) is: ' + userBirthYear + ` ` + userBirthMonth + ` ` + userBirthDay);
// let userBirthDate = new Date(userBirthYear, userBirthMonth, userBirthDay);

// Retrieve user input
let birthYear = document.getElementById("birthYearInput").value;
let birthMonth = document.getElementById("birthMonthInput").value;
let birthDay = document.getElementById("birthDayInput").value;
let isAdudeYorN = document.getElementById("genderInput").value.toUpperCase();
console.log('Your DOB (YYYY/MM/DD) is: ' + birthYear + ` ` + birthMonth + ` ` + birthDay + ` and answer to are you a dude is: ` + isAdudeYorN);
let userBirthDate = new Date(birthYear, birthMonth, birthDay);

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
let db = new sqlite3.Database('DeathCalculator/data/deathData.db'); // 5/9/23 Corrected - Path was wrong and leading to SQLite error 14 (SQLITE_CANTOPEN)

// Run a query
export async function executeQuery() {
    try {
      // Run a query
      const genderColumn = userIsAdude ? 'male_lifeExpectancy' : 'female_lifeExpectancy';
      const sql = `SELECT ${genderColumn} FROM deathChart WHERE exactAge = ${age}`;
      console.log(sql);
      const rows = await new Promise((resolve, reject) => {
        db.all(sql, [], (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
  
      // Process the query results
      rows.forEach(row => console.log(row));
    } catch (err) {
      console.error(err.message);
    }
}

// //Old function, before changing variable to take text field content
// export async function executeQuery() {
//     try {
//       // Run a query
//       const genderColumn = userIsAdude ? 'male_lifeExpectancy' : 'female_lifeExpectancy';
//       const sql = `SELECT ${genderColumn} FROM deathChart WHERE exactAge = ${age}`;
//       console.log(sql);
//       const rows = await new Promise((resolve, reject) => {
//         db.all(sql, [], (err, rows) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(rows);
//           }
//         });
//       });
  
//       // Process the query results
//       rows.forEach(row => console.log(row));
//     } catch (err) {
//       console.error(err.message);
//     }
// }
  
// Call the function within an async context
export async function run() {
await executeQuery();
}

run(); // Start the execution

db.close();