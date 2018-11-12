import React, {Component} from 'react';

export const Test = () => {
	return <p>This is a test!</p>;
};

const person = (props) => {
	return (
		<div>
			<p onClick={props.click}>I am {props.name} and I'm {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} />
		</div>
	)
};



export default person;


