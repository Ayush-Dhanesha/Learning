// function AddTodo(){
//     const inputEl =document.querySelector("input");
//     const value =inputEl.value;
//     console.log(value);
// }

// let ctr=0;

// function callback(){
//     const el = document.querySelectorAll("h4")[1]
//     el.innerHTML = ctr;
//     ctr=ctr+1;
// }

// setInterval(callback,1000);
// function deleteTodo(index) {
//     const element = document.getElementById("todo-" + index);
//     // element.parentNode.removeChild(element);
//     document.getElementById("todoParent").removeChild(element);
//   }

function addTodo() {
  const inputEl = document.getElementById("inp");
  const textNode = document.createElement("div");
  textNode.innerHTML = inputEl.value;
  const parentEl = document.getElementById("todos");
  parentEl.appendChild(textNode);

}