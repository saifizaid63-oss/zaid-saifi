const myNums = [1, 2 , 3]

// const myTotal = myNums.reduce( function (acc, currval){
//     console.log(`acc: ${acc} and curravl: ${currval}`);
    
//     return acc + currval
// },0)

const myTotal = myNums.reduce ((acc , currval )=>acc + currval , 0)

console.log(myTotal);



const shoopingCard = [
    {
        itName: " js course",
        price: 2999
    },
    {
        itName: " py course",
        price: 999
    },
    {
        itName: " c++ course",
        price: 2999
    },
]

const priceToPay = shoopingCard.reduce( (acc , item)=> acc +  item.price, 0)
console.log(priceToPay);
