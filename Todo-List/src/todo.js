import { displayTodo } from "./dom";
import { storeTodo, getStoredTodo, storeProjects } from "./storage";
import { showModal, setTodoFormFor } from "./modal";
import { formatDistanceToNow } from "date-fns";
import { storeAndDisplayProjects } from "./project";

export default function(id, projectId, title, description, dueDate, priority, checkList=[]) {
    let [ year, month, day ] = dueDate.split('-').map((value) => Number(value));
    let daysRemaining = formatDistanceToNow(new Date(year, month - 1, day));
    
    return { id, projectId, title, description, daysRemaining, priority, checkList }
}

export function checkList(checkList) {
    const checkListItem = () => {
        let description = '';
        let checked = false;

        return { description, checked }
    }

    const addItem = () => {
        checkList.push(checkListItem());
    }

    return { addItem }
}

export function addTodosEventListener(todoNodes, projects) {
    todoNodes.forEach((todoNode) => {
        todoNode.addEventListener('click', (e) => {
            let [ projectId, todoId ] = e.target.parentNode.id.split('-');
            const todo = projects.getProjectsTodo(projectId, todoId);
            displayTodo(todo);
            storeTodo(todo);
        })
    })
}

export function addNewTodosEventListener(addTodoButtons) {
    addTodoButtons.forEach((addTodoButton) => {
        addTodoButton.addEventListener('click', (e) => {
            showModal(document.querySelector('.todoModal'));
            
            const todoModalForm = document.querySelector('.todoModal > form');
            setTodoFormFor(todoModalForm, e.target.id)
        })
    })
}

export function addRemoveTodoEventListener(removeTodoButtons, projects) {
    removeTodoButtons.forEach((removeTodoButton) => {
        removeTodoButton.addEventListener('click', (e) => {
            let [ projectId, todoId ] = e.target.parentNode.id.split('-');
            const project = projects.getProject(projectId);

            project.removeTodo(todoId);
            storeAndDisplayProjects(projects)
        })
    })
}

export function addNewCheckListItemEventListener(button, projects) {
    button.addEventListener('click', (e) => {
        const [ todoId, projectId ] = [ getStoredTodo().id, getStoredTodo().projectId ];
        const todo = projects.getProjectsTodo(projectId, todoId);
        todo.addItem()
        
        storeTodo(todo);
        storeProjects(projects.getProjects());
        //displayTodo(todo);
    })
}