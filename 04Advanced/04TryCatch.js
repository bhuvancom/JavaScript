const convertToDollor = (dollor) => 
{
    if (typeof dollor === 'number') {
        return dollor * 64;
    }
    else
    {
        throw Error("Amount is not number");
    }
}
console.log(convertToDollor(78));

/* this block will try to execute if error it will not stop or freeze here*/
try {
    console.log(convertToDollor("five")); // error here    
} catch (error) {
    console.log(error);
}


/* these lines will work even if error cought in try catch block */

console.log("I will execute");






 