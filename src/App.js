// The import for React is to let us use the HTML like syntax to write the javascript code and it will 
// translate the code into React related code behind the scene. And the <div>, <h1> and etc are come from
// the React library.
import React, { Component } from 'react';
import './App.css';
import Person, {Test} from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {id: 'key1', name: 'Max', age: 30},
      {id: 'key2', name: 'Manu', age: 29},
      {id: 'key3', name: 'brandon', age: 20}
    ],
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;

    // Note: we dont want to manipulate persons directly.
    //       In the example above, we get a pointer to the persons object, a pointer
    //       is a reference, by doing the persons.splice(personIndex, 1) we have
    //       already mutated the original state which is a bad practice as it may lead
    //       unpredictive impacts. 

    // // slice method is to copy to a new array 
    // const persons = this.state.persons.slice();
    
    // ES6 
    const persons = [...this.state.persons];
    // splice is to delete the current index
    persons.splice(personIndex, 1);
    this.setState({ persons: persons});

    // Takeaway: should always update the state in a unmutable fashion, thus always keeps
    //           the original state untounched, like the principle in redux

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }



  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit', 
      padding: '8px',
      cursor: 'pointer'
    }; 

    let persons = null;

    // Note: the key property is recommended for output the list elements and it makes 
    //       the render method more efficient. The reason behind the scene is that 
    //       without the key property, the render method will need to find which element 
    //       has been changed and re-render the whole list. While, with the key propety, 
    //       react will know exactly which element changed and only re-render the sepecific 
    //       element which will make the render method more efficient. 

    // Note: the key must be unique.  

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age} 
                key={person.id}/>
              );
          })}
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
