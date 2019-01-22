let userEmail = "lco1232"
let password = " 1234 "
console.log(password.trim());

let userCheker = function(myString){
    if (myString.includes(123) && (myString.length > 6)){
        return true;
    }
    return false;
}

let passwordCheker = function(myPass){
    if (myPass.includes(1234) && myPass.length > 8 ){
    return true
    }

    return false
}

console.log(userCheker(userEmail));
console.log(passwordCheker(password.trim()));


