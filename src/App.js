import logo from './logo.svg';
import React from 'react';
import './App.css';

// this is a react component for the form 

class MyForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      contact: null,
      errmsg: ''
    };
  }

  // an arrow function to handle the input data 
  myChangeHandler = (event) => {
    // gets the value from input box 
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if(nam === 'contact'){
      if(val!= "" && !Number(val)){
        err = <strong>must be a number</strong>;
      }
    }
    this.setState({errmsg: err});
    this.setState({[nam]: val});
  }

  mySubmitHandler = (event) => {
    //to prevent the form from actually being submitted.
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }

  render() {
    let header = '';
    if (this.state.username) {
      header = <h1>Hello {this.state.email}</h1>;
    } else {
      header = '';
    }
    return (
      <div className="App">
      <form onSubmit={this.mySubmitHandler}>
      {header}
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      /> 
      <input
        type='text'
        name = 'email'
        onChange={this.myChangeHandler}
      />
      <input
        type='text'
        name = 'contact'
        onChange={this.myChangeHandler}
      />
      {this.state.errmsg}
      <select value={this.state.mycar}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      <input type= 'submit' />
      </form>
      </div>
    );
  }
}

function App() {

  return (
    <div>
    <h1  style={{color: "white"}}>Forms in React</h1>
    <MyForm />
    </div>
  );
}

export default App;
