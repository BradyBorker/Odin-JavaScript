export function displayProjects(projects) {
    const projectsDisplay = document.querySelector('.projects');
    const projectNodes = [];

    for (let i=0; i<projects.length; i++) {
        const projectLi = document.createElement('li');
        projectLi.classList.add('project');
        projectLi.id = i;
        projectLi.textContent = projects[i].name;
        
        const addTodoButton = document.createElement('span');
        addTodoButton.textContent = '+';
        addTodoButton.classList.add('add-todo');
        addTodoButton.id = i;
        projectLi.appendChild(addTodoButton)

        const todoUl = document.createElement('ul');
        todoUl.classList.add('todos');
        projectLi.appendChild(todoUl);
        
        for (let j=0; j<projects[i].getTodos().length; j++) {
            const todoLi = document.createElement('li');
            const todoTitle = projects[i].getTodos()[j].title;
            
            const titleNode = document.createElement('span');
            titleNode.textContent = todoTitle;
            titleNode.classList.add('todo-title');

            const removeTodoButton = document.createElement('span');
            removeTodoButton.classList.add('remove-todo')
            removeTodoButton.textContent = 'x';
            
            todoLi.classList.add('todo');
            todoLi.id = `${i}-${j}`;
            todoLi.appendChild(removeTodoButton);
            todoLi.appendChild(titleNode);

            todoUl.appendChild(todoLi);
        }

        projectNodes.push(projectLi);
    }

    projectsDisplay.replaceChildren(...projectNodes)
}

export function displayTodo(todo) {
    const titleNode = document.querySelector('.title');
    titleNode.textContent = todo.title;

    const dueDateNode = document.querySelector('.due-date');
    dueDateNode.textContent = `Time Remaining: ${todo.daysRemaining}`;

    const priorityNode = document.querySelector('.priority');
    priorityNode.textContent = `Priority: ${todo.priority}`;

    const descriptionNode = document.querySelector('.description');
    descriptionNode.textContent = todo.description;
}

export function addClass(node, className) {
    node.classList.add(className);
}

export function removeClass(node, className) {
    node.classList.remove(className);
}

export function setId(node, idName) {
    node.id = idName;
}
