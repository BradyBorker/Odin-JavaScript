import { storageAvailable, storeProjects } from "./storage";
import { newProject } from "./project";
import newTodo from "./todo";

document.addEventListener('DOMContentLoaded', (e) => {
    let projects = [];

    if (storageAvailable('localStorage') && localStorage.getItem('projects')) {
        projects = localStorage.getItem('projects');
        console.log(projects)
        console.log('hi')
        localStorage.removeItem('projects');
    } else {
        // Create default project
        console.log('there')
        let defaultProject = newProject('Default');
        defaultProject.addTodo(newTodo('Example Title', 'Example Description', 'Feb 21', 1))
        projects.push(defaultProject)
        console.log(defaultProject)

        storeProjects(projects)
    }
});