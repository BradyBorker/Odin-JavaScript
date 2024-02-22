import { storageAvailable, storeProjects, getStoredProjects, storeTodo, getStoredTodo } from "./storage";
import { newProject, myProjects, addNewProjectEventListener } from "./project";
import { displayProjects, displayTodo } from "./dom"
import { addClosesEventListener, addSubmitsEventListener } from "./modal";
import { addTodosEventListener, addNewTodosEventListener } from "./todo";
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
    addTodosEventListener(todoNodes, projects)

    const addTodoButtons = document.querySelectorAll('.add-todo');
    addNewTodosEventListener(addTodoButtons);
});

const addNewProjectNode = document.querySelector('.new-project');
addNewProjectEventListener(addNewProjectNode);

const closeModals = document.querySelectorAll('.close-modal');
addClosesEventListener(closeModals);

const modalForms = document.querySelectorAll('.modal > form');
addSubmitsEventListener(modalForms, projects);

// Add modal for Project creation
