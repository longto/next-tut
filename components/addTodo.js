export default class AddTodo extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
    }
    onContentChange = (value) => {
        this.setState({
            ...this.state,
            content: value
        })
    }


    render() {
        return (
            <div>
                <input type="text" value={this.state.content} placeholder="Enter your todo here" onChange={(event) => this.onContentChange(event.target.value)} />
                <button onClick={() => this.props.actions.addTodo(this.state.content)}>Add</button>
            </div>
        );
    }
}