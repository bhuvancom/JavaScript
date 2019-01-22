let myTodo = {
    day : 'Monday',
    meetings : 0,
    meetDone : 0,

    demo : function(){
        console.log("Hey i am a method");
    },

    addMeetings : function(){
        console.log(this)
    }
}

myTodo.demo()
myTodo.addMeetings()

let myTodoTwo = {
    day : 'Tueday',
    meetings : 2,
    meetDone : 3,

    demo : function(){
        console.log("Hey i am a method");
    },

    addMeetings : function(num){
        //console.log(this) // referencing to current object
        this.meetings = this.meetings + num
    },
    summary : function(){
        console.log(`you have ${this.meetings} left`);
    }
}

myTodoTwo.addMeetings(2)
myTodoTwo.summary()