var input = document.getElementById("input");
var text = document.querySelector(".text");

function addTask(){
    if (!input.value.trim()){
        alert("Add Something!");
    } else {
        var li = document.createElement("li");
        li.textContent = input.value;

        var  removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.onclick = function () {
            text.removeChild(li);
        };
        
        li.appendChild(removeButton);
        li.appendChild(li);
        input.value = "";
    }
}