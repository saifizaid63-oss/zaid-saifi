// Primitive 

// 7 types : String , Number , Boolean , null , undefined , symbol , BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn =  false 
const outsideTemp = null
let userEamil;

const id = Symbol ('123')
const anotherId = Symbol ('123')

console.log(id === anotherId);

const bigNumber = 80773228741234564526n



// Reference type (Non primitive )

//Array, objects , Function  

const heros = ["batman ", "superman" , "spiderman"];
let myObj = {
    name : "zaid saifi",
    'age' : 22,

}

const myFunction= function(){
    console.log("Hello world");
    
}

console.log(typeof myFunction);



// ****************************************//

// Stack (primitive ),  Heap (non - primitive)

let myYoutubename = "zaid_x_saifi"

let anothername = myYoutubename
anothername = "mohammad zaid "

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    eamil: "saifizaid63@gmail.com",
    upi : "saifizaidupse",
}
let userTwo = userOne 

userTwo.email = "arwazsaifi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);





