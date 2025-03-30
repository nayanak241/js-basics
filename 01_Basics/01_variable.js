const accountId = 144553
let accountEmail = "nay338@gmail.com"
var accountPassword = "12345"
accountCity = "Hubli"

//accountId = 2//not allowed
accountEmail = "nayana.com"
accountPassword = "212121"
accountCity = "jaipur"
let accountState;
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


