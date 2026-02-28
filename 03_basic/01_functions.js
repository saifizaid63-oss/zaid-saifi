

function sayMyName(){
console.log("Z");
console.log("I");
console.log("A");
console.log("D");
}

// sayMyName()


// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1 , number2){
   
    let result = number1 + number2
    // console.log("zaid saifi")
    return result

    
}

 const result =  addTwoNumbers(3, 5)

//  console.log("result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
console.log("please enter a username");
return
        
    }
return `${username} just logged in`

}


//  console.log(loginUserMessage("zaid"))
//  console.log(loginUserMessage());
 

function calculateCardPrice(val1 , val2, ...num1){
    return num1
}

// console.log(calculateCardPrice(200, 400, 500, 600, 700));

const username = {
    username: "zaid saifi",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject. username} and price {anyobject. price}`);

    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400 , 300, 600]

function returnSecondValue(getArray){
    return getArray[3]


}
console.log(returnSecondValue(myNewArray));


