//  const tinderUser = new Object()

const tinderUser = {}
 
tinderUser.id = "123456"
tinderUser.name = "sam"
tinderUser.isLoggedIn =  false

//  console.log(tinderUser);

const regularUser = {
    email: "samsaifi63@gmail.com",
    fullname : {
        userfullname:{
            firstname: "zaid",
            lastname: "saifi"

        }
    }
}
//  console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1, ...obj2}
 
// console.log(obj3);


const users = [
    {
        id: 1,
        email:" zaidisifi.com"

    }
]








const course = {
    course: "Hindi to English",
    Price: "499",
    courseInstructor : "zaid saifi"

}

// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);


// const navbar = ({company}) => {

// }

// navbar(company = "zaid")


// {
//     name: " zaid saifi",
//     coursename : "code and chai ",
//     price : "free"

// }

[
    {},
    {},
    {},
]