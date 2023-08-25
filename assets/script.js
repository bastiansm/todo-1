let todoInput = document.getElementById('input-todo');
let btn = document.getElementById('btn');


btn.addEventListener('click', function () {
    if (todoInput.value == '') {
        alert('Fuck')
    }
    else {
        let todoContent = document.querySelector('.list-content');
        let todo = todoContent.innerHTML;
        todo += `
                <li class="todo-value">
                <div class="content">
                <input type=checkbox class="done" />
                <div class="values">
                <p>${todoInput.value}</p>
                </div>
                </div>
                <button class="btn-delete"><i class="fa-solid fa-trash-can"></i></button>
                </li>
                `;


        todoContent.innerHTML = todo;
        todoInput.value = '';
        todoInput.focus();


        let done = document.querySelectorAll('.done');
        for (let i = 0; i < done.length; i++) {
            const input = done[i];
            input.addEventListener('change', function () {
                let todoSpan = input.nextElementSibling;
                todoSpan.classList.toggle('active');
            })
        }

        let btnDelete = document.querySelectorAll('.btn-delete');
        for (let x = 0; x < btnDelete.length; x++) {
            const btnD = btnDelete[x];
            btnD.addEventListener('click', function () {
                this.parentElement.remove();
            })
        }

    }
})