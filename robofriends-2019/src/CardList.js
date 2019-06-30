import React from 'react';
import Card from "./Card"

export default class CardList extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
		
	}

	render() {
		
		return (
			<div>
				{this.props.robots.map((r,i)=>{
			return  <Card id={r.id} name={r.name} email={r.email} key={r.email} />
		})}
			</div>
		);
	}
}
