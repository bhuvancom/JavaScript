
const array = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

console.log("For loop");


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
let i = 0

console.log("Now While loop");

while(true)
{
    if(i==array.length) break
    console.log(array[i]);
    i++;
}
i = 0
console.log("Now do While loop");
do
{
    if (i==array.length) {
        break
    }

    console.log(array[i]);
    i++
}
while(true)

