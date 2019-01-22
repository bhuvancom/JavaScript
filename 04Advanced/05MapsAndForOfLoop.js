const john = {
    name : "I am John",
    age : 24,
    isActive : true
}

const sam = {
    name : "I am sam",
    age : 30,
    isActive : false
}

const ram = {
    name : "I am Ram",
    age : 21,
    isActive : true
}

let users = new Map() // mp object

//console.log(typeof users);
users.set('john',john); // key,value , key can be anything but unique
users.set('ram',ram); // key,value , key can be anything but unique
users.set('sam',sam); // key,value , key can be anything but unique

//console.log(users); // show all data set in it the user object

//console.log(users.size); // show nmbr of element in it

//console.log(users.get("john")); //get values in john key 

//iterator
//console.log(users.values()); 


//for of syntax

for (const key of users.keys()) {
    console.log(key);  
}

for (const key of users.values()) {
    console.log(key.name);  
}


for (const [key,value] of users.entries() ) {
    console.log(key + " : "+value.name);
    
}



// for each

users.forEach((value,key) => console.log(key +" : "+value.name) )




var arrayOfArray = [["one",1], ["two",2], ["three",3]];

var newMap = new Map(arrayOfArray);

console.log(newMap);
