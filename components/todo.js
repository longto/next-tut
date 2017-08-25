export default ({todo, actions}) => {
    return (
        <li>
            <button onClick={() => actions.toggleTodo(todo.id)}>Toggle</button>
            <button onClick={() => actions.removeTodo(todo.id)}>Delete</button>
            <span>Id: </span>
            <span>{todo.id} </span>
            <a href="www.google.com">{todo.content}</a>
            <span> Completed:</span>
            <span>{todo.completed.toString()}</span>
        </li>
    );
};
