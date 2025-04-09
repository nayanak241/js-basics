const user = {
    username : "nayana",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`)
        console.log(this);
    }


}

// user.welcomeMessage();

// user.username = "sam";

// user.welcomeMessage();

// console.log(this);

// function chai(){
//     console.log(this.username);
// }const

// chai();


// const chai = function () => {
//     let usernae = "nayana"
//     console.log(this)
// }

// 

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// console.log((addTwo(3,4)))

//  addTwo = (num1,num2) =>( num1 + num2) 
//*******************/
 //if parentheis no need of retuen statement and it is a implicit function

// console.log(addTwo(3,4))

const addTwo = (num1, num2) =>({username : "nayana"})

// console.log(addTwo(3,4))

// const myArray = [2,5,3,7,8]

// myArray.forEach((element) => {
//     console.log(element);
//   });