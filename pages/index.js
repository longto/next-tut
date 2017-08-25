import Header from '../components/header.js'
import fetch from 'isomorphic-fetch'

export default class Index extends React.Component {
  static async getInitialProps ({ store, isServer }) {
    const response = await fetch('https://api.github.com/users/linh1987');
    const user = await response.json();
    return { message: "welcome to the jungle", user };
  }

  

  render() {
    return (
      <div>
        <Header />
        <div>Name: { this.props.user.name }</div>
      </div>
    )
  }
}