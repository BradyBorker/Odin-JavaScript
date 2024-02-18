export function displayProjects(projects) {
    const projectsDisplay = document.querySelector('.projects');
    const projectNodes = [];

    for (let i=0; i<projects.length; i++) {
        const projectLi = document.createElement('li');
        projectLi.classList.add('project');
        projectLi.id = i;
        projectLi.textContent = projects[i].name

        const todoUl = document.createElement('ul');
        todoUl.classList.add('todos');
        projectLi.appendChild(todoUl);
        
        for (let j=0; j<projects[i].getTodos().length; j++) {
            const todoLi = document.createElement('li');
            const todoTitle = projects[i].getTodos()[j].title;
            
            todoLi.classList.add('todo');
            todoLi.id = `${i}-${j}`;
            todoLi.textContent = todoTitle;

            todoUl.appendChild(todoLi);
        }

        projectNodes.push(projectLi);
    }

    projectsDisplay.replaceChildren(...projectNodes)
}

export function displayTodo(todo) {

}
