const User = {
    username : " zaid saifi",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}

// User.welcomeMessage()
// User.username = "sam"
// User.welcomeMessage()

// console.log(this);

// function coffee(){
//     console.log(this.username);
// }

// coffee()


const chai = ()=>{
    let username = "zaid"
    console.log(this);
    
}
// chai()


// const addTwo =  (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo =  (num1 , num2) =>  num1 + num2
    
// const addTwo =  (num1 , num2) =>  (num1 + num2)

const addTwo =  (num1 , num2) => ({username: "zaid saifi"})


console.log(addTwo(3,4));


// const myArray = [2, 5 , 3, 7]

// myArray.forEach()
    


