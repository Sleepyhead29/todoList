//<------- Variables ------->
let listItem = document.getElementById("userInput");
let addButton = document.getElementById("addButton");


//<------- Event Listeners ------->
addButton.addEventListener("click", functionalities);


//<------- Functions ------->
function functionalities() {
    if (listItem.value == "") {
        alert("Write Something");
    } else {


        //Creates delete button
        let deleteButton = document.createElement("input");
        deleteButton.type = "button";
        deleteButton.value = "X";
        deleteButton.setAttribute('id', 'deleteButton');

        //Creates Edit button
        let editButton = document.createElement("input");
        editButton.type = "button";
        editButton.value = "Edit";
        editButton.setAttribute("id", "editButton");

        //Creates container for buttons
        let buttonContainer = document.createElement("div");
        buttonContainer.setAttribute("id", "buttonContainer");
        buttonContainer.appendChild(deleteButton);
        buttonContainer.appendChild(editButton);

        //Creates Text
        let newListItem = document.createElement("li");
        let listText = document.createTextNode(listItem.value);
        newListItem.appendChild(listText);

        listItem.value = ""

        //Creates box 
        let listItemContainer = document.createElement("div");
        listItemContainer.appendChild(newListItem);
        listItemContainer.appendChild(buttonContainer);

        listItemContainer.setAttribute("id", "itemBox");
        //Add Div to ul
        let listContainer = document.querySelector("ul");
        listContainer.appendChild(listItemContainer);


        //Button functionalities

        deleteButton.addEventListener("click", deleteItem);
        editButton.addEventListener("click", editItem);

        function deleteItem() {
            listItemContainer.remove();
        }

        function editItem() {
            if (editButton.value == "Edit") {
                newListItem.focus();
                newListItem.setAttribute("contentEditable", "true");
                newListItem.style.border = "3px solid black";
                newListItem.style.borderRadius = "5px";
                editButton.value = "Save";
            } else if (editButton.value == "Save") {
                newListItem.setAttribute("contentEditable", "false");
                newListItem.style.border = "none";
                editButton.value = "Edit";
            }


        }
    }

}