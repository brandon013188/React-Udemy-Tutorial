import React from 'react';
import classes from './Person.module.css';
// import Radium from 'radium';

export const Test = () => {
	return <p>This is a test!</p>;
};

const person = (props) => {
	// const style = {
	// 	'@media (min-width: 500px)' : {
	// 		width: '450px'
	// 	}
	// };

	// Error handling 
	const rnd = Math.random();

	if (rnd > 0.7) {
		throw new Error('Something went wrong!');
	}


	return (
		// For Radium 
		// <div className="Person" style={style}>

		// Using the CSS Module it will automatically generate a unqiue class name which is 
		// no longer Person class but something like Person_Person_ash5_1 
		<div className={classes.Person}>
			<p onClick={props.click}>I am {props.name} and I'm {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="text" value={props.name} onChange={props.changed} />
		</div>
	)
};



// export default Radium(person);

export default person;

