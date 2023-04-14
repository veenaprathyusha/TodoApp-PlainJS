
const inputBox = document.querySelector(".input-box");
const addButton = document.querySelector(".add-button");
const mainComp = document.querySelector(".todo-list");

addButton.addEventListener("click", addButtonFunction);
mainComp.addEventListener("click", deleteOrCheckfunction);
function addButtonFunction(e) {
    e.preventDefault();

    const mainDiv = document.createElement("div");

    const listEle = document.createElement("li");
    listEle.innerText = (inputBox.value);
    mainDiv.appendChild(listEle);

    mainComp.appendChild(mainDiv);
   
    const button1 = document.createElement("button");
    button1.innerText = "check"
    button1.classList.add("check-button");
    mainDiv.append(button1);

    const button2 = document.createElement("button");
    button2.innerText = "delete"
    button2.classList.add("del-button")
    mainDiv.append(button2);

    inputBox.value = ""
}

function deleteOrCheckfunction(e) {
    console.log("e", e);
    if (e.target.classList[0] === "check-button") {
        let item  = e.target.parentElement;
        item.classList.toggle("cross-this")
    }
    if (e.target.classList[0] === "del-button") {
        let item = e.target.parentElement;
        item.remove();
    }
}