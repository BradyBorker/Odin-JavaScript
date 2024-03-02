import { addClass, removeClass, setId } from "./dom";
import { newProject, storeAndDisplayProjects } from "./project";

export function showModal(modal) {
    removeClass(modal, 'hidden');
}

function hideModal(modal) {
    addClass(modal, 'hidden');
}

export function setTodoFormFor(form, projectId) {
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

function extractModalData(modalForm) {
    const data = {};
    let inputs = modalForm.querySelectorAll('input');
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
                storeAndDisplayProjects(projects);
            } else if(e.target.parentNode.classList.contains('projectModal')) {
                const project = newProject(data.name, projects.projectCount());
                projects.addProject(project);

                hideModal(document.querySelector('.projectModal'));
                storeAndDisplayProjects(projects)
            }
        })
    })
}