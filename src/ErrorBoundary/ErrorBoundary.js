import React, {Component} from 'react';

// The ErrorBoundary will only works in Production mode, in development mode it will still
// show the thrown error other than the customized error page.

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false,
			errorMessage: ''
		};
	}	

	componentDidCatch = (error, info) => {
		this.setState({
			hasError: true,
			errorMessage: error
		});
	} 

	render() {
		if (this.state.hasError) {
			return <h1>{this.state.errorMessage}}</h1>;
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;