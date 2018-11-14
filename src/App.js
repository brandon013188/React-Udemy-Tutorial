// The import for React is to let us use the HTML like syntax to write the javascript code and it will 
// translate the code into React related code behind the scene. And the <div>, <h1> and etc are come from
// the React library.
import React, { Component } from 'react';
import './App.css';
import Person, {Test} from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 30},
      {name: 'Manu', age: 29},
      {name: 'brandon', age: 20}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log("It was clicked!");
    //DON'T DO THIS: this.state.persons[0].name = "New Name";
    this.setState({
      persons:[
        {name: newName, age: 30},
        {name: 'Manu', age: 29},
        {name: 'brandon', age: 20}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name: 'Max', age: 30},
        {name: event.target.value, age: 29},
        {name: 'brandon', age: 20}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };



  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit', 
      padding: '8px',
      cursor: 'pointer'
    }; 

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Not Brandon")}
            changed={this.nameChangedHandler}>
          My Hobbies: Racing
          </Person>
          <Person 
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>);
        </div>
      );
    }
          



    return (
      // Only allow one root element here.
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
      </div>
      );

    // Note: render for null will be empty, thus null in JXS will be empty.

    // 1. The JSX code 
    //
    // return (
    //   // Only allow one root element here.
    //   <div className='App'>
    //     <h1>Hi, I'm a React App</h1>
    //   </div>
    // );

    // 2. Translated React code
    // 
    // return React.createElement("div", {className: 'App'}, React.createElement("h1", null, "Hi, I'm a React App"));
  }
}

export default App;
