import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app2 = props =>{
  const [personsState, setPersonsState] = useState({
    persons:[
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'Some other value'
  });

  console.log(personsState);

  const switchNameHandler=()=>{
    //DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState({
      persons:[
        {name: 'Maximilian', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ],
      otherState: personsState.otherState
    })
  }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        <button onClick={switchNameHandler} >Switch Name</button>
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age} />
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age} 
          click={}>My Hobbies: Racing</Person>
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}/>
      </div>
    );
    /* return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hi, I\'m a React App')); */

}

export default app;
