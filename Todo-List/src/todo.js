import { displayTodo } from "./dom";
import { storeTodo } from "./storage";
import { showModal, setTodoFormFor } from "./modal";
import { formatDistanceToNow, format } from "date-fns";

export default function(title, description, dueDate, priority) {
    let [ year, month, day ] = dueDate.split('-').map((value) => Number(value));
    let daysRemaining = formatDistanceToNow(new Date(year, month - 1, day));
    
    return { title, description, daysRemaining, priority }
}

export function addTodosEventListener(todoNodes, projects) {
    todoNodes.forEach((todoNode) => {
        todoNode.addEventListener('click', (e) => {
            let [projectId, todoId] = e.target.id.split('-');
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