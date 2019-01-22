// searching feature in array
const myTodo = ["Buy this","Buy that","This is this","This is that"];
console.log(myTodo.indexOf("Buy this")); //returns integer index if found else -1
console.log(myTodo.indexOf(1)); //-1


const nerwTodos = [
    {
        title : "Buy Bread",
        isDone: false, 
    },

    {
        title : "Goto Gym",
        isDone : false,
    },

    {
        title : "record vid",
        isDone : true,
    }
]

const index = nerwTodos.findIndex(
    function(todo,index){
        return todo.title === "Goto Gym"
    })

    console.log(index);

    const findTodo = function(myTodos,title){
        const index = myTodos.findIndex(function(todo,index){
            return todo.title.toLowerCase() === title.toLowerCase();
        })
        return myTodos[index]
    }

    let printMe = findTodo(nerwTodos,"goto Gym");// return object at index 1
    console.log(printMe);


     



    
    

