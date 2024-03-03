import { storageAvailable, getStoredProjects, storeTodo, getStoredTodo } from "./storage";
import { newProject, myProjects, addNewProjectEventListener, storeAndDisplayProjects } from "./project";
import { displayTodo } from "./dom"
import { addClosesEventListener, addSubmitsEventListener } from "./modal";
import { addNewCheckListItemEventListener } from "./todo";
import "./style.css";

const projects = myProjects();
document.addEventListener('DOMContentLoaded', (e) => {
    if (storageAvailable('localStorage') && localStorage.getItem('projects')) {
        let storedProjects = getStoredProjects();

        for (let project of storedProjects) {
            let projectName = Object.keys(project).pop();
            let loadedProject = newProject(projectName, projects.projectCount());
            
            loadedProject.loadTodos(project[projectName]);
            projects.addProject(loadedProject);
        }
    } else {
        let defaultProject = newProject('Default', projects.projectCount());
        defaultProject.addTodo({title: 'Example Title', description: 'Example Description', date: '2024-02-27', priority: 1});
        projects.addProject(defaultProject);

        storeTodo(defaultProject.getTodo(0));
    }
    let todo = getStoredTodo() ? getStoredTodo() : projects.getProjectsTodo(0, 0);
    todo = projects.getProjectsTodo(todo.projectId, todo.id);

    displayTodo(todo, projects);    
    storeAndDisplayProjects(projects)
    //localStorage.clear()
});

const addNewProjectNode = document.querySelector('.new-project');
addNewProjectEventListener(addNewProjectNode);

const newCheckListItemButton = document.querySelector('.new-item');
addNewCheckListItemEventListener(newCheckListItemButton, projects)

const closeModals = document.querySelectorAll('.close-modal');
addClosesEventListener(closeModals);

const modalForms = document.querySelectorAll('.modal > form');
addSubmitsEventListener(modalForms, projects);

