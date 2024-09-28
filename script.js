var input = document.getElementById("input");
var text = document.querySelector(".text");

function addTask(){
    if (!input.ariaValueMax.trim()){
        alert("Add Something!");
    }else{
        var li = document.createElement("li");
        li.textContent = input.value;

        li.appendChild(li);
        input.value = "";
    }
}