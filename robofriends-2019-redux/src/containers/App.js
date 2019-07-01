import React from 'react';
import CardList from "../components/CardList"
import  {setSearchField,requestRobots} from "../actions"
import {connect} from 'react-redux';
// import {robots} from "./robots"
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import ErrorBoundary from "../components/ErrorBoundary.js"

const mapStateToProps=state=>{
	return {
		searchField:state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending:state.requestRobots.isPending,
		error:state.requestRobots.error
	}
}
const mapDispatchToProps=(dispatch)=>{
	return {onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
			onRequestRobots:()=>requestRobots(dispatch)
	}
}
class App extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	// constructor(props) {
	// 	super(props);
	// 	this.state={
	// 		robots:[],
	// 		// searchField:""
	// 	}
		// this.onSearchChange=this.onSearchChange.bind(this)
	// }
	componentDidMount(){
		// console.log(this.props.store.getState())
		// fetch(`https://jsonplaceholder.typicode.com/users`).then(response=>{
		// 	return response.json()
		// }).then(users=>{
		// 	this.setState({robots:users})
		// })
		this.props.onRequestRobots()
		
	}
	// onSearchChange(e){
	// 	this.setState({searchField:e.target.value})
		
		
	// }

	render() {
		const filteredRobots=this.props.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
		})
		if(this.props.isPending){
			return <h1>Loading</h1>
		}else{
		return (
			<div className="tc">
				<h1 className="heading-main">Robofriends</h1>
				<SearchBox searchChange={this.props.onSearchChange} />
				<Scroll>
				<ErrorBoundary>
				<CardList robots={filteredRobots} />
				</ErrorBoundary>
				</Scroll>
			</div>
		)}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
