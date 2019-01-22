// kings Problem
let king = "Global King"

if (true) {
    let king = "local King"

    if (true) {
         let king = " local 2 king"
         console.log("inside if - if "+king);
    
    }
}

if (true) {
    console.log("Second if part "+king)
}


{
    ram = "ramu"; // looks local but not
}
console.log(ram);
