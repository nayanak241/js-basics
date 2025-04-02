//singleton objects
// const tinderUser = new Object()
// console.log(tinderUser);
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Nayana" ,
            lastname: "Kulkarni"
    
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};

// const obj3 = {obj1,obj2};
// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2);
const obj3 = {...obj1,...obj2}//spreading type
// console.log(obj3)

const users = [
    {
        id:1,
        email:"n@gmail.com"
    },
    {
        id:1,
        email:"n@gmail.com"
    },
    {
        id:1,
        email:"n@gmail.com"
    },
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    course :"js in Hindi",
    price : "999",
    courseInstructor:"Hitesh"
}
const{courseInstructor:instructor} = course//destructuriing so that no one get to write long name everytime

// console.log(courseInstructor);
console.log(instructor);

//json
// {
//     "name" : "nayana",
//     "coursename": "js in hindi",
//     "price":0
// }

