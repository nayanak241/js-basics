// //if
// const isUserloggedIn = true
// const temp = 41

// // if(isUserloggedIn){

// // }
// if(temp<50){
//     console.log("less than 50");
// }
// else{
//     console.log("temp is greater than 50");
// }
// console.log("Execute");

// const score = 200
// if(score>100){
//     const power = "fly";
//     console.log(`user power:${power}`);
// }

// const balance = 1000;

// // if(balance>500) console.log("test"),console.log("test2");//this is not best practice to write code

// if(balance<500){
//     console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const isUserloggedIn = true;
const debitCard = true;
const loggedFromGoogle = false;
const loggedFromEmail = true;

if(isUserloggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(loggedFromGoogle || loggedFromEmail){
    console.log("user logged in");
}
