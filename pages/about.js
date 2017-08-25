import Header from '../components/header.js'
import Adder from '../components/adder.js'
import Result from '../components/result.js'

export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 1 };
    }

    onAdd = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1
        })
    }

    onMinus = () =>{
        this.setState({
            ...this.state,
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Adder onAdd={this.onAdd} onMinus={this.onMinus} />
                <Result result={this.state.count} />
            </div>
        );
    }
}