//Dates

// let date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toISOString());
// console.log(typeof date);

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate1 = new Date(2023,0,23,5,3)
// console.log(myCreatedDate1.toLocaleDateString());

let mydate = new Date("2023-01-14")
console.log(mydate.toLocaleDateString());

let mydate1 = new Date("01-14-2023");
console.log(mydate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(mydate1.getTime());

console.log(Math.floor(Date.now()/1000));

