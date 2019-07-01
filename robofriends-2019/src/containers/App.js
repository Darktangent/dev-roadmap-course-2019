import React from 'react';
import CardList from "../components/CardList"
// import {robots} from "./robots"
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import ErrorBoundary from "../components/ErrorBoundary.js"
export default class App extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	constructor(props) {
		super(props);
		this.state={
			robots:[],
			searchField:""
		}
		this.onSearchChange=this.onSearchChange.bind(this)
	}
	componentDidMount(){
		console.log(this.props.store)
		console.log("a")
		fetch(`https://jsonplaceholder.typicode.com/users`).then(response=>{
			return response.json()
		}).then(users=>{
			this.setState({robots:users})
		})
		
	}
	onSearchChange(e){
		this.setState({searchField:e.target.value})
		
		
	}

	render() {
		const filteredRobots=this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		if(this.state.robots.length===0){
			return <h1>Loading</h1>
		}else{
		return (
			<div className="tc">
				<h1 className="heading-main">Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
				<ErrorBoundary>
				<CardList robots={filteredRobots} />
				</ErrorBoundary>
				</Scroll>
			</div>
		)}
	}
}
