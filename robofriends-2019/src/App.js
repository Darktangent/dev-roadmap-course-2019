import React from 'react';
import CardList from "./CardList"
import {robots} from "./robots"
import SearchBox from "./SearchBox"
export default class App extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
		this.state={
			robots:robots,
			searchField:""
		}
		this.onSearchChange=this.onSearchChange.bind(this)
	}
	onSearchChange(e){
		this.setState({searchField:e.target.value})
		
		
	}

	render() {
		const filteredRobots=this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		return (
			<div className="tc">
				<h1>Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}
