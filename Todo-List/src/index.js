import { storageAvailable, storeProjects, getProjects, storeLastOpenedTodo, getLastOpenedTodo } from "./storage";
import { newProject } from "./project";
import { displayProjects, displayTodo } from "./dom"
import newTodo from "./todo";
import "./style.css";

document.addEventListener('DOMContentLoaded', (e) => {
    let projects = [];
    let todo;

    if (storageAvailable('localStorage') && localStorage.getItem('projects')) {
        let storedProjects = getProjects();

        for (let project of storedProjects) {
            let projectName = Object.keys(project).pop();
            let loadedProject = newProject(projectName);
            
            loadedProject.loadTodos(project[projectName]);
            projects.push(loadedProject);
        }

        localStorage.removeItem('projects');
    } else {
        let defaultProject = newProject('Default');
        defaultProject.addTodo(newTodo('Example Title', 'Example Description', 'Feb 21', 1));
        projects.push(defaultProject);

        storeProjects(projects);
        storeLastOpenedTodo(projects[0].getTodos[0]);
    }
    todo = getLastOpenedTodo() ? getLastOpenedTodo() : projects[0].getTodos[0];

    displayProjects(projects)
    displayTodo(todo)
});