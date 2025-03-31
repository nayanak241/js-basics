const name = "nayana";
const repocount = 50;

console.log(`Hello my name ${name} and my repo count is ${repocount}`);

const gameName = new String('nayana-mk');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4);

console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = " nayana ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nayana.com/nayana%20kulkarni";

console.log(url.replace('%20','-'));

console.log(url.includes('nayana'));

console.log(gameName.split('-'));