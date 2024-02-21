import { addClass, removeClass, setId } from "./dom";

export function showModal(modal) {
    removeClass(modal, 'hidden');
}

export function hideModal(modal) {
    addClass(modal, 'hidden');
}

export function setFormFor(form, projectId) {
    setId(form, projectId);
}

export function extractModalData(modal) {
    const data = {};
    let inputs = modal.querySelectorAll('input');
    inputs.forEach((input) => {
        data[input.name] = input.value
    })

    return data
}

export function addClosesEventListener(closeBtns) {
    closeBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            const modal = e.target.parentNode;
            hideModal(modal);
        })
    })
}

export function addSubmitsEventListener(modalForms) {
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
    
            }
        })
    })
}