import { addClass, removeClass, setId, displayProjects } from "./dom";
import { addTodosEventListener, addNewTodosEventListener } from "./todo";
import { storeProjects } from "./storage";
import { newProject } from "./project";

export function showModal(modal) {
    removeClass(modal, 'hidden');
}

function hideModal(modal) {
    addClass(modal, 'hidden');
}

export function setFormFor(form, projectId) {
    setId(form, projectId);
}

export function addClosesEventListener(closeBtns) {
    closeBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            const modal = e.target.parentNode;
            hideModal(modal);
        })
    })
}

function extractModalData(modal) {
    const data = {};
    let inputs = modal.querySelectorAll('input');
    inputs.forEach((input) => {
        data[input.name] = input.value
    })

    return data
}

export function addSubmitsEventListener(modalForms, projects) {
    modalForms.forEach((modalForm) => {
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
    
            let data = extractModalData(e.target);
            if (e.target.parentNode.classList.contains('todoModal')) {
                const project = projects.getProject(e.target.id);
                project.addTodo(data);
    
                hideModal(document.querySelector('.todoModal'));
                storeProjects(projects.getProjects());
                displayProjects(projects.getProjects());
    
                const todoNodes = document.querySelectorAll('.todo');
                addTodosEventListener(todoNodes, projects)
                
                const addTodoButtons = document.querySelectorAll('.add-todo');
                addNewTodosEventListener(addTodoButtons);
            } else if(e.target.parentNode.classList.contains('projectModal')) {
                const project = newProject(data.name);
                projects.addProject(project);

                hideModal(document.querySelector('.projectModal'));
                storeProjects(projects.getProjects());
                displayProjects(projects.getProjects());

                const todoNodes = document.querySelectorAll('.todo');
                addTodosEventListener(todoNodes, projects)
                
                const addTodoButtons = document.querySelectorAll('.add-todo');
                addNewTodosEventListener(addTodoButtons);
            }
        })
    })
}