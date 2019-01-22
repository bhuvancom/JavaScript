class User{
    constructor(first,last,age){
        // default is empty
        this.first = first;
        this.last = last;
        this.age = age;
    }

    getFullName(){
        return `${this.first} ${this.last}, is my full name`;
    }

    editName(newName){
        const newN = newName.split(" ");
        this.first = newN[0];
        this.last = newN[1];
    }
}

class Teacher extends User {
    constructor(first,last,age,subject){
        super(first,last,age);
        this.subject = subject;
    }

    getSubject(){
        return `i teach ${this.subject}`;
    }

    getFullName(){
            return `${this.first} ${this.last}, is my full name and i teach ${this.subject}`;
        }


}

const john = new User("John","Sharma",24);
console.log(john);

console.log(john.getFullName());
john.editName("johnny lal");
console.log(john.getFullName());

const teacher = new Teacher("Johnny","Srivastava",55,"Python");
console.log(teacher.getFullName());
console.log(teacher.getSubject());







