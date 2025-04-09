//Immediately invodked functions Expressions(IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();
//to remove global scope pollution we have dine this


((name) => {
    console.log("DB CONNECTED TWO");
  })('nayana'); // <- These parentheses invoke the function
  
  