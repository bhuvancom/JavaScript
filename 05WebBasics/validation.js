// input validation
function myValidation(){
    //for button pressed
    let myValue = document.querySelector("#myInput").value;

    if (isNaN(myValue) || myValue < 1 || myValue > 20 ) {
        alert("Not valid")
    }
    else
    {
        console.log("this input is ok %s",myValue);
        document.querySelector("#idOne").textContent = myValue;
    }
}



//form validation

document.querySelector(".myForm").addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log(event.target.UserName.value);
    console.log(event.target.RealName.value);
    event.target.RealName.value = ""
    event.target.UserName.value = ""

    
});