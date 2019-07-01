import React from 'react';

export default class ErrorBoundary extends React.Component {
	

	constructor(props) {
		super(props);
		this.state={
			hasError:false
		}
	}
	componentDidCatch(error,info){
		this.setState({hasError:true})
	}

	render() {
		if(this.state.hasError){
			return <h1>ooops. That is not good</h1>
		}
		return (
			<div>
					{this.props.children}
			</div>
		);
	}
}
