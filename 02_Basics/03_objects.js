//singleton
//object.create
//object literals

const mySym = Symbol("key1");

const jsUser = {
    name : "Nayana",
    "fullname":"Nayana M K",
    [mySym]:"mykey1",//if square bracket then it is a symbol else it is a string
    age:21,
    location:"Hubli",
    email:"nayana@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["fullname"]);
console.log(jsUser.mySym);
console.log(jsUser[mySym]);

jsUser.email = "nayana@chatgpt.com";
Object.freeze(jsUser)//after freezed no change happen
jsUser.email="nayana@micro.com"
console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello JS user");
}
jsUser.greetingsTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());
