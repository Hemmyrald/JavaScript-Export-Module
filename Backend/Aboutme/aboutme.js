let mySelf = {
    name: 'Adisa Emmanuel Abiodun',
    age: 2,
    address: 'Godwin Villa, Iworoko',
    state: 'Oyo',
    nationality: 'Nigeria',
    school: 'Ekiti State University',
    hobbies: 'Watching videos, playing games, reading e.t.c'
}


function aboutme() {
    console.log('My name is ' + mySelf.name);
    console.log("I'm " + mySelf.age + " yrs old");
    console.log('My address is ' + mySelf.address);
    console.log("I'm from " + mySelf.state +  " State");
    console.log("I'm a " + mySelf.nationality + " by Nationality");
    console.log('The name of my school is ' + mySelf.school);
    console.log('My hobbies are ' + mySelf.hobbies);

    return '......'
}


module.exports.aboutme = aboutme;

console.log(aboutme());
let myfriend = require('../myfriend/fri.js');

console.log(myfriend.friend());


