let myTodo = {
    day : 'Monday',
    meetings : 0,
    meetDone : 0,
}

let addMeetings = function (todo,meet = 0) {
    todo.meetings = todo.meetings + meet
}

let meetDone = function (todo,meet = 0) {
    todo.meetDone =  meet - todo.meetDone
}

let resetDay = function(todo){
    todo.meetings = 0
    todo.meetDone = 0
}

let getSummaryOfDay = function(todo){
    console.log
     (`you have ${todo.meetings - todo.meetDone} meetings left`)

}

addMeetings(myTodo,3)
addMeetings(myTodo,4)
meetDone(myTodo,2)
getSummaryOfDay(myTodo)

//console.log(getSummaryOfDay(myTodo));
