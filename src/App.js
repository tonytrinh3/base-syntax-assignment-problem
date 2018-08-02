import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput.js';
import UserOutput from './UserOutput.js';


class App extends Component {
  state = {
    persons: [
      {name: "black", password: "black123"},
      {name: "green", password: "green123"},
      {name: "blue", password: "blue123"},
    ]
  }

  switchNameHandler = function(newName) {
    this.setState({
      persons: [
        {name: newName, password: "black123"},
        {name: "green", password: "green123"},
        {name: "blue", password: "blue123"},
    ]

    })

  }

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        {name: "black", password: "black123"},
        {name: e.target.value, password: "green123"},
        {name: "blue", password: "blue123"},
    ]

    })

  }


  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput/>
        
        <UserOutput 
        name = {this.state.persons[0].name} 
        password = {this.state.persons[0].password} />
        <UserOutput 
        name = {this.state.persons[1].name} 
        password = {this.state.persons[1].password}    
        changed = {this.nameChangedHandler}/>
        <UserOutput 
        name = {this.state.persons[2].name} 
        password = {this.state.persons[2].password} />
        <button onClick = {() => this.switchNameHandler("red01010")  }>Click me hoes </button>
      </div>
    );
  }
}

export default App;
