import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { id:'abc1', name: 'Max', age: 28 },
      { id:'abc2', name: 'Manu', age: 29 },
      { id:'abc3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons: persons
    })
  }

 

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id //p.id
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  render () {
    let persons = null;
    
    if(this.state.showPersons){
      persons = <Persons 
            changed={this.nameChangedHandler} 
            clicked={this.deletePersonHandler} 
            persons={this.state.persons} />;
    }

    

    return (
        /** HERE TO CONTINUE */
        <div className={classes.App}>
          <Cockpit 
            persons ={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler} />
          {persons}    
      </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;


