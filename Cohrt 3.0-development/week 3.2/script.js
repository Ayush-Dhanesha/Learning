// let index=1;

// function addTodo(){
//     const value =document.querySelector("input").value;
//     const spanEl = document.querySelector("span");
//     const buttonEl = document.querySelector("button");
//     spanEl.innerHTML = value;
//     buttonEl.innerHTML = "Delete!";
// -----------------------------------------------------------------------------------
    // const newDivEl = document.createElement("div");
    // newDivEl.appendChild(spanEl);
    // newDivEl.appendChild(buttonEl);
// ----------------------------------------------------------------------------------
    // newDivEl.setAttribute("id",index);
    // newDivEl.innerHTML = "<div>"+index+"."+value+'</div> <button onclick="deleteTodo('+index+')" >Delet</button>'; 
    //             index=index+1;
// -----------------------------------------------------------------------------------

//     document.querySelector("body").appendChild(newDivEl)
// }

// function deleteTodo(ctr) {
//     const element = document.getElementById( ctr);
//     element.parentNode.removeChild(element);
//     // document.getElementById("body").removeChild(element);
// }
let todos = [];
let counter = 0;

// Function to add a new to-do item
function addTodo() {
    const todoTitle = document.querySelector("input").value;

    if (todoTitle.trim() !== "") {
        todos.push({
            id: counter++,
            title: todoTitle,
        });

        render();
    } else {
        alert("Todo title cannot be empty!");
    }

    document.querySelector("input").value = ""; // Clear input field after adding
}

// Function to delete a to-do item by ID
function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    render();
}

// Function to update a to-do item's title

function updateTodo(id, newTitle) {
    todos = todos.map((todo) => {
        if (todo.id === id) {
            return { ...todo, title: newTitle };
        }

        return todo;
    });

    render();
}

// Function to create a to-do component
function createTodoComponent(todo) {
    const inputEle = document.createElement("input");
    inputEle.type = "text";
    inputEle.value = todo.title;
    inputEle.readOnly = true;

    const deleteButtonEle = document.createElement("button");
    deleteButtonEle.innerHTML = "Delete";
    deleteButtonEle.onclick = function () {
        deleteTodo(todo.id);
    };

    const updateButtonEle = document.createElement("button");
    updateButtonEle.innerHTML = "Edit";

    updateButtonEle.onclick = function () {
        if (inputEle.readOnly) {
            inputEle.readOnly = false;
            updateButtonEle.innerHTML = "Save";
            inputEle.focus(); // Focus on the input field
            inputEle.style.outline = "1px solid #007BFF"; // Add blue focus color
        } else {
            const newTitle = inputEle.value.trim();

            if (newTitle) {
                updateTodo(todo.id, newTitle);
                inputEle.readOnly = true;
                updateButtonEle.innerHTML = "Edit";
            } else {
                alert("Todo title cannot be empty!");
            }
        }
    };

    const divEle = document.createElement("div");
    divEle.appendChild(inputEle);
    divEle.appendChild(updateButtonEle);
    divEle.appendChild(deleteButtonEle);

    return divEle;
}

// Function to render the to-do list
function render() {
    document.querySelector("#todos").innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        const element = createTodoComponent(todos[i]);
        document.querySelector("#todos").appendChild(element);
    }
}