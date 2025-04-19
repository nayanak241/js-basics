const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} currval:${currval}`);
//     return acc + currval
// },0)

const myTotal = myNums.reduce((acc,curr) =>  acc+curr,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price:999
    },
    {
        itemName : "py course",
        price:1500
    },
    {
        itemName : "DSA course",
        price:3500
    },
]

const priceToPay = shoppingCart.reduce((acc,item) =>  acc+ item.price,0)
console.log(priceToPay);