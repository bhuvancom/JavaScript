/*
    general
const hello = function(name){
    return `Hello ${name}`;
}
console.log(hello("Akash"));
*/

// const helloArrow = (name) => {
//     return `Hello ${name}`;
// }
// console.log(helloArrow("Akash"));

const helloArrow = (name) =>  `Hello ${name}`; 
console.log(helloArrow("Akash"));


const todo = [
    {
        title : "first",
        isDone : false
    },

    {
        title : "second",
        isDone : true
    },

    {
        title : "third",
        isDone : true
    },
]

const thingDone = todo.filter((todo) => todo.isDone === true)

const thingNotDone = todo.filter((todo) => todo.isDone === false)

//const titleIfNotDone = (todo) => {const index = todo.findIndex(todo=>  todo.isDone === false) return todo[index]}

console.log(thingDone);

//console.log(titleIfNotDone);




