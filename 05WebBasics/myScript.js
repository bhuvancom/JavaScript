//alert("File is attached")

// console.log(document.documentURI);
// console.log(document.title);
// console.log(document.title);
//document.title = "I got change" // chnaging title 


// getElement by Id,class,name are options


 //console.log(document.getElementById("idOne"));
 //console.log(document.getElementsByClassName("classOne"));

//  const myElement = document.querySelectorAll(".classOne"); // or querySelector -> retuns first tag
//  console.log(myElement[0]);

 const myPElment = document.querySelectorAll("p");
myPElment.textContent ="Hello i am now changed";
myPElment.forEach(element => {
    element.textContent = "I am changed by js"
});
 
const myNewPara = document.createElement("p");
myNewPara.textContent = "Added by js";

document.querySelector("body").appendChild(myNewPara);


document.querySelector("button").addEventListener("click",(event) => {
    //console.log(event);
    event.target.textContent = "i was clicked"
});


//track input form
document.querySelector("#myForm").addEventListener("input",(event) => {
    console.log(event.target.value);
    
});
 
