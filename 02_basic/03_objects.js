// singleton
// object literals 

const mySym = Symbol("key1")


const JsUser = {
    name: "zaid saifi",
    "full name": "Mohammad zaid ",
    [mySym] : "mykey1",
    age: 18, 
    location: "bulandshahr",
    email: "saifizaid63@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturaday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(typeof [mySym]);


JsUser.email = "zaidsaif8077.com"
// Object.freeze(JsUser)
JsUser.email = "zaidmircrosoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${ this.name}`);
}
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());
