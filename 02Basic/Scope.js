let iAmGlobal = "someGlobalValue"

if (true) {
    let iAmLocal = "someLocalValue" // scope is in this block only
    var iAmVariable = "var keyword is used" // var keyword is used
    let iAmGlobal = "GlobalAsLocal" // it will now used
    console.log(iAmGlobal);
    console.log(iAmLocal);
}

console.log(iAmVariable);

console.log(iAmGlobal);


//console.log(iAmLocal); // wont work as it is not global


