import newTodo from './todo'
import { showModal } from './modal'
import { displayProjects } from "./dom";
import { addTodosEventListener, addNewTodosEventListener, addRemoveTodoEventListener } from "./todo";
import { storeProjects } from "./storage";

export function newProject(name) {
    const todos = []

    const getTodos = () => {
        return todos
    }

    const getTodo = (todoIndex) => {
        return todos[todoIndex]
    }
    
    const addTodo = (data) => {
        todos.push(newTodo(data.title, data.description, data.date, data.priority));
    }

    const removeTodo = (todoIndex) => {
        todos.splice(todoIndex, todoIndex);
    }

    const loadTodos = (loadedTodos) => {
        for (let todo of loadedTodos) {
            todos.push(todo);
        }
    }

    return { name, getTodos, getTodo, addTodo, removeTodo, loadTodos }
}

export function myProjects() {
    const projects = [];

    const addProject = (project) => {
        projects.push(project);
    }

    const getProjects = () => {
        return projects;
    }

    const getProject = (projectIndex) => {
        return projects[projectIndex];
    }

    const getProjectsTodo = (projectIndex, todoIndex) => {
        return projects[projectIndex].getTodo(todoIndex);
    }

    return { addProject, getProjects, getProject, getProjectsTodo }
}

export function addNewProjectEventListener(newProjectNode) {
    newProjectNode.addEventListener(('click'), (e) => {
        showModal(document.querySelector('.projectModal'));
    })
}

export function storeAndDisplayProjects(projects) {
    storeProjects(projects.getProjects());
    displayProjects(projects.getProjects());

    const todoNodes = document.querySelectorAll('.todo > .todo-title');
    addTodosEventListener(todoNodes, projects)
    
    const addTodoButtons = document.querySelectorAll('.add-todo');
    addNewTodosEventListener(addTodoButtons);

    const removeTodoButtons = document.querySelectorAll('.remove-todo');
    addRemoveTodoEventListener(removeTodoButtons, projects);
}