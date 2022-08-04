import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import Navbar from "./Navigation/nav.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import naturalenvironment from './images/natural-environment.jpg';


// const One =  <h1 className='kavi'>kavi</h1>

function Nav() {
  return <h1>nav</h1>
}
function Sidebar() {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>sidebar {color}</h1>
      <h1>My favorite color is  {color}</h1>
      <button
        className="text-primary"
        type="button"
        onClick={() => setColor("blue")}
      >Click to change Value</button>
    </>
  )
}
function Content() {
  return <>
    <h1>Content</h1>
    <img src={naturalenvironment} alt="logo" />
    <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg' alt="img"></img>
  </>
}
function Footer() {
  const [color] = useState("red");
  return <h1>Footer {color}</h1>
}

function Child() {

  return <Web />
}
function Web() {
  return <div>
    <Navbar />
    <App />
    <Sidebar />
    <Content />
    <Footer />
  </div>
}

class Two extends React.Component {
  // constructor() {
  //   super();
  //   this.state = { username: "kavi" }
  // }
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  Change = (a) => {
    this.setState({ age: a })
    this.setState({ name: 'kavi' });
  }
  // componentWillMount() {
  //   alert('kavi')
  // }
  render() {
    var a = {
      color: "blue",
      textAline: "center"
    };
    var b = {
      color: 'red',
      textAline: 'center'
    }
    var c = {
      fontVariant: "small-caps"
    }

    return <>
      <Child />
      <form>
        Enter your name : <input style={b} type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
        <p style={c}>{this.state.value}</p>
      </form>

      <h1 style={{ color: "red", fontVariant: "small-caps" }} >{this.state.name}</h1> your age is {this.state.age}
      <button style={a} type='button' onClick={() => this.Change('21')}> click</button>
      <div className='container-fluid'>

        <h1 className='text-center text-danger'>kaviyarasu</h1>
      </div>

    </>

  }
}


ReactDOM.render(<Two />, document.getElementById('root'));

// ReactDOM.render(<Child/>,document.getElementById('root'));//work


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();