import Header from '../components/header.js'
import AddTodo from '../components/addTodo'
import TodoList from '../components/todolist'

export default class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
    }

    maxId(list) {
        return Math.max(...list.map(x => x.id).concat([-1]));
    }


    onAdd = (content) => {
        const newTodos = this.state.todos.concat([
            {
                id: this.maxId(this.state.todos) + 1,
                content,
                completed: false
            }
        ])

        this.setState({
            ...this.state,
            todos: newTodos
        })
    }

    onDelete = (id) => {
        this.setState({
            ...this.state,
            todos: this.state.todos.filter((todo) => todo.id !== id)
        })
    }

    onToggle = (id) => {
        this.setState({
            ...this.state,
            todos: this.todos.map((todo) => {  
                return {
                    ...todo, 
                    completed: todo.id === id ? !todo.completed : todo.completed
                }
            })
        })
    }

    getActions() {
        return {
            toggleTodo: this.toggleTodo,
            removeTodo: this.onDelete,
            addTodo: (content) => this.onAdd(content)
        }
    }

    render() {
        return (
            <div>
                <Header />
                <TodoList actions={this.getActions()} todos={this.state.todos} />
                <AddTodo actions={this.getActions()} />
            </div>
        );
    }
}