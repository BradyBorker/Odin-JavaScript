export function newProject(name) {
    let todos = []

    const getTodos = () => {
        return todos
    }
    
    const addTodo = (newTodo) => {
        todos.push(newTodo);
    }

    const removeTodo = (index) => {

    }

    const loadTodos = (loadedTodos) => {
        todos = loadedTodos
    }

    return { name, getTodos, addTodo, removeTodo, loadTodos }
}