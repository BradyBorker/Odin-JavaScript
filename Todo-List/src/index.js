import { storageAvailable, storeProjects, getStoredProjects, storeTodo, getStoredTodo } from "./storage";
import { newProject, myProjects, getProjectsTodo } from "./project";
import { displayProjects, displayTodo } from "./dom"
import { showModal, hideModal, extractModalData, setFormFor } from "./modal";
import newTodo, { addTodoEventListeners, addNewTodoEventListeners } from "./todo";
import "./style.css";

const projects = myProjects();
document.addEventListener('DOMContentLoaded', (e) => {
    if (storageAvailable('localStorage') && localStorage.getItem('projects')) {
        let storedProjects = getStoredProjects();

        for (let project of storedProjects) {
            let projectName = Object.keys(project).pop();
            let loadedProject = newProject(projectName);
            
            loadedProject.loadTodos(project[projectName]);
            projects.addProject(loadedProject);
        }

        localStorage.removeItem('projects')
    } else {
        let defaultProject = newProject('Default');
        defaultProject.addTodo({title: 'Example Title', description: 'Example Description', date: 'Feb 21', priority: 1});
        projects.addProject(defaultProject);

        storeProjects(projects.getProjects());
        storeTodo(defaultProject.getTodo(0));
    }

    let todo = getStoredTodo() ? getStoredTodo() : projects.getProjectsTodo(0, 0);
    displayProjects(projects.getProjects());
    displayTodo(todo);

    const todoNodes = document.querySelectorAll('.todo');
    addTodoEventListeners(todoNodes, projects)

    const addTodoButtons = document.querySelectorAll('.add-todo');
    addNewTodoEventListeners(addTodoButtons);
});

const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', (e) => {
    const modal = e.target.parentNode;
    hideModal(modal);
})

const modalForms = document.querySelectorAll('.modal > form');
modalForms.forEach((modalForm) => {
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let data = extractModalData(e.target);
        if (e.target.parentNode.classList.contains('todoModal')) {
            const project = projects.getProject(e.target.id);
            project.addTodo(newTodo(data))

            hideModal(document.querySelector('.todoModal'));
            storeProjects(projects.getProjects());
            displayProjects(projects.getProjects());
            // Need to add event listeners to newly created todo :(
            // Need to fix data sigh...
        } else if(e.target.parentNode.classList.contains('projectModal')) {

        }
    })
})