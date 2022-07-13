console.log('Hello World');
let name ='anna';
console.log(name);

let nam = 'Anna'; //string literal
let age = '30'; //number literal
let isApproved = true; //boolen literal
let firstName; // undefined
let lastName = null // null
//____________________Reference Type____________________
//-------object---------

let person = {
    firsName: 'Anna',
    ag:30
};
person.firsName='sofii'
console.log (person);
//__________________array____________________

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1; // can add diferent tipes of elements
console.log(selectedColors.length);

//________function____________
//--1 prameter---

function greet(sername){
console.log('Hello' + sername);
}
greet('Anna');
greet ('Lev');

//----2 prameters-----

function gret(people, number){
    console.log('Hello' + people + '' + number);
}
gret ('anna', 1);
gret ('lev', 2)





