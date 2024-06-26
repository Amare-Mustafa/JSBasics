//function declaration
//function declaration : JS hoists/puts the function to the top of the file
//we can call the function fist and after declare the logic
/*greet();
function greet(){
    console.log("helloworld");
}



///const function
//function expression
const speak = function(name= "amir"){
    console.log(`Goodday ${name}`);
};
speak("Amar");//will overrite the other one
//hoisting de

//value returning funtion
const sum = function(x,y)
{
    return x + y;
}
let mysum = sum(2,5);
console.log(mysum);

//arrow function
const calcArea = (radius) => {
    return 3.14 * radius**2;
}

const circle = calcArea(4);
console.log(`area is ${circle}`);

const dogreet = () => 'hello,world';
const bill = (products,tax) => {
    let total = 0;
    for(let i = 0; i < products; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

//callback function
let people = ['mario','amamr', 'john','josh'];

people.forEach(function(person){
    console.log("person");
})

people.forEach((person, index) => {
    console.log(person, index);
})

const logPerson = (person,index) =>{
    console.log(`${index} - ${person}`);
}

people.forEach(logPerson);
//------------------------------------------------------------
const ul = document.querySelector('.people');
const HumanNames = ["Peter", "Quinn", "Riley", "Samuel", "Tara", "Uma", "Victor", "Wendy", "Xavier", "Yvonne"];

let html = ``;
//for each name generate html template

HumanNames.forEach(human => {
    //create html temp
    html += `<li style = "color : purple"> ${human}</li>`;
})

ul.innerHTML = html;
//done
*/

//---------------------------------------------------------------------------------------
//objects : have properties(variables ) and things it can do (methods)

//object literals

let user = {
    name: 'Amy',
    age : 24,
    hight: 5.6,
    email:"amar@gmail.com",
    blogs : ['why injera is nice',' how to make injera', 'how to eat injera'],
    greetings : () => console.log('helloworld'),

    login : () => console.log('User logged in'),
    logout: () => console.log('User logged out'),
    logBlogs : function () {
        this.blogs.forEach((blog) =>{
            console.log(blog);
        })
    },

}

console.log(user.age, user.name, user.hight);
user.greetings();
console.log(user['age']);
console.log(user['hight']);

user['name'] = 'amir';
const emailname = 'email';
console.log(user[emailname]);
user.login();
user.logout();
user.logBlogs();