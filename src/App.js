import React, { Component }
  from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import FileUpload from './FileUpload';
class App extends Component {


  constructor() {
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }


  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user : user
      });
    });
  }


  handleAuth() {
    debugger;
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code} : ${error.message}`));
  }

  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha cerrado sesión`))
      .catch(error => console.log(`Error ${error.code} : ${error.message}`));
  }


  renderLoginButton() {
    //si el usuario esta logueado
    if (this.state.user) {
      return (
        <div>
          <p>Hola {this.state.user.displayName}</p>
          <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
          <button onClick={this.handleLogout}>Salir</button>

          <br/>
          <FileUpload/>
        </div>
      );
    } else {
      return (
        <button onClick={this.handleAuth}>Login con google</button>
      )
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.renderLoginButton()}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            If you don't jump, you are a volita.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}
export default App;
