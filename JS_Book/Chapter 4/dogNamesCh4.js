// [Start] Code from Chapter 3 exercise 
var prompt = require('readline-sync');
var breed = prompt.question('What breed is your dog?');
console.log(breed);
var  dogs = {
    terrier: 'Suzy',
    husky: 'Sir Sniffybums III',
    pug: 'Notorious P.U.G.'
};
console.log('Your dog\'s name is ' + dogs[breed] + '? How fascinating!');
// [End] Code from Chapter 3 exercise 

