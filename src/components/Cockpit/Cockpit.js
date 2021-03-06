import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    const assignClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red
    }
    if(props.persons.length <= 2){
      assignClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignClasses.push(classes.bold);
    }
    console.log(props.persons.length);
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass} 
                /* alt={this.state.showPersons} */
                onClick={props.clicked}>
                Switch Name
            </button>
        </div>
        
    );
};

export default cockpit;