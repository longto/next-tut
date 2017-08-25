import Todo from './todo';

export default ({ todos, actions }) => {
    return (
        <div>
            <ul>
                {
                    todos.map(todo => <Todo key={todo.id} todo={todo} actions={actions} />)
                }
            </ul>
        </div>
    );
};