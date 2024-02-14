import { storageAvailable, storeProjects } from "./storage";
import { newProject } from "./project";
import newTodo from "./todo";

document.addEventListener('DOMContentLoaded', (e) => {
    let projects = [];

    if (storageAvailable('localStorage') && localStorage.getItem('projects')) {
        let storedProjects = JSON.parse(localStorage.getItem('projects'));
        
        for (let project of storedProjects) {
            let projectName = Object.keys(project).pop();
            let loadedProject = newProject(projectName);
            
            loadedProject.loadTodos(project[projectName]);
            projects.push(loadedProject);
        }

        localStorage.removeItem('projects')
    } else {
        let defaultProject = newProject('Default');
        defaultProject.addTodo(newTodo('Example Title', 'Example Description', 'Feb 21', 1));
        projects.push(defaultProject);

        storeProjects(projects);
    }
});