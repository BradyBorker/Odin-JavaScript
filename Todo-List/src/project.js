export default function(name) {
    const todos = []
    
    const getName = () => {
        return name;
    }

    const setName = (newName) => {
        name = newName;
    }

    const getTodos = () => {
        todos
    }
    
    const setTodo = (newTodo) => {
        todos.push(newTodo);
    }

    const removeTodo = (index) => {

    }

    return { getName, setName }
}