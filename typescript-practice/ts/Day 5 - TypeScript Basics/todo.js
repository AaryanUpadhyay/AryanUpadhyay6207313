
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTodo() {
    const value = input.value.trim();
    if (value === '') return;
    const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';
        checkbox.style.marginRight = '0.75rem';
        checkbox.onclick = function() {
            if (checkbox.checked) {
                span.style.textDecoration = 'line-through';
                span.style.color = '#888';
            } else {
                span.style.textDecoration = '';
                span.style.color = '';
            }
        };
        li.appendChild(checkbox);
    const span = document.createElement('span');
    span.textContent = value;
    li.appendChild(span);
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.className = 'delete-btn';
        delBtn.onclick = function() {
            todoList.removeChild(li);
        };
        li.appendChild(delBtn);
    todoList.appendChild(li);
    input.value = '';
    input.focus();
}

addBtn.addEventListener('click', addTodo);
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') addTodo();
});


let btn1 = document.getElementById("button");
let dark = false;
btn1.addEventListener("click", () => {
    if (!dark) {
        document.body.style.backgroundColor = "black";
        // document.body.style.color = "white";
        dark = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        dark = false;
    }
});
