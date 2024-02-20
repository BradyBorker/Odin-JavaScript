import { storageAvailable, storeProjects, getStoredProjects, storeTodo, getStoredTodo } from "./storage";
import { newProject, myProjects, getProjectsTodo } from "./project";
import { displayProjects, displayTodo } from "./dom"
import { showModal, hideModal, extractModalData } from "./modal";
import newTodo from "./todo";
import "./style.css";

const projects = myProjects();
document.addEventListener('DOMContentLoaded', (e) => {
    // let projects = [];

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
        defaultProject.addTodo(newTodo('Example Title', 'Example Description', 'Feb 21', 1));
        projects.addProject(defaultProject);

        storeProjects(projects.getProjects());
        storeTodo(projects.getProjectsTodo(0, 0));
    }

    let todo = getStoredTodo() ? getStoredTodo() : projects.getProjectsTodo(0, 0);
    displayProjects(projects.getProjects());
    displayTodo(todo);

    const todoNodes = document.querySelectorAll('.todo');
    todoNodes.forEach((todoNode) => {
        todoNode.addEventListener('click', (e) => {
            let [projectId, todoId] = e.target.id.split('-');
            todo = projects.getProjectsTodo(projectId, todoId);
            displayTodo(todo);
            storeTodo(todo);
        })
    })

    const addTodoButtons = document.querySelectorAll('.add-todo');
    addTodoButtons.forEach((addTodoButton) => {
        addTodoButton.addEventListener('click', (e) => {
            showModal(document.querySelector('.todoModal'))

        })
    })
});

const modalForms = document.querySelectorAll('.modal > form');
modalForms.forEach((modalForm) => {
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let projects = getProjects();
        let data = extractModalData(e.target);
        if (e.target.parentNode.classList.contains('todoModal')) {
            
        } else if(e.target.parentNode.classList.contains('projectModal')) {

        }
    })
})