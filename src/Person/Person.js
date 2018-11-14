import React, {Component} from 'react';
import './Person.css';

export const Test = () => {
	return <p>This is a test!</p>;
};

const person = (props) => {
	return (
		<div className="Person">
			<p onClick={props.click}>I am {props.name} and I'm {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="text" value={props.name} onChange={props.changed} />
		</div>
	)
};



export default person;

