let name = 'Emma';
function sayName () {
    console.log('My name is ' + name);
}
module.exports.name = name;
module.exports.sayName= sayName;

module.exports = {
    name: 'Emma',

}


// console.log(global);
// __dirname is the path to the file path/directory
// let name = 'Emma';
// console.log(__dirname);
// __filename is the name to the file name


// let name = require('./say-name.js');
// console.log(name.name);
// console.log(name.sayName());\