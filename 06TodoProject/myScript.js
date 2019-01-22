//var h = document.createElement("h1");

//var myValue = document.createTextNode("Hello World");
//h.appendChild(myValue)
//document.querySelector("h1").appendChild(h)





var ul = document.getElementById("list");
var li;


var addTodo = document.getElementById("add")
var removeTodo = document.getElementById("remove")
var removeAll = document.getElementById("removeAll")

addTodo.addEventListener("click",addItem);
removeTodo.addEventListener("click",removeItem);
removeAll.addEventListener("click",remove);

function remove(){
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0])
        {
            ul.removeChild(li[index]);
        }
        
    }
}

function addItem(params) {
    var input = document.getElementById("input");
    var myVal = input.value;
    ul = document.getElementById("list");
    var textNode = document.createTextNode(myVal);

    if (myVal==="") {
        return false;
    }
    else{
        // created li
        li = document.createElement("li");
        //created checkbox
        var chkbox = document.createElement("input");
        chkbox.type = "checkbox";
        chkbox.setAttribute("id","check"); // applying attributes

        //created label
        var label = document.createElement("label");
        label.setAttribute("for","item");//optional

        // add these element on webpage

        ul.appendChild(label);
        li.appendChild(chkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        
        // for fade effect
        setTimeout(() =>{
            li.className = "visual";
        },3)

        input.value = "";

    }

}
function removeItem(params) {
    //console.log("remove  btn clicked");
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked)
        {
            ul.removeChild(li[index]);
        }
        
    }
}