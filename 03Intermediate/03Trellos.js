const myTodo = []
myTodo.push("adding first item")
myTodo.push("adding second item")
myTodo.push(3)

myTodo.forEach(function (todo,index) {
    console.log(`Your ${index+1} is ${todo}`);
    
})