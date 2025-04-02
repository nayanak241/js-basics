function sayMyName(){
    console.log("N")
    console.log("A")
    console.log("Y")
    console.log("A")
    console.log("N")
    console.log("A")
}
// sayMyName()
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

function addTwoNumbers(num1,num2){
//    let result = num1+num2;
//    return result;

return num1+num2;
   //after return nothing can be printed 
}
const result = addTwoNumbers(3,5);

// console.log("Result:",result);

function LoginUseRMessage(username = "sam"){
if(username === undefined){
    console.log("Please enter a username")
    return
}

    return `${username} just logged in`
}

// console.log(LoginUseRMessage("nayana"))
// console.log(LoginUseRMessage())

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000,5000,10000))
const user = {
    username : "nayana",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray))

