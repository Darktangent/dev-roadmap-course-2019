import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "tachyons"
import {Provider, connect} from "react-redux"
import {createStore} from 'redux'
import App from './containers/App';
import {searchRobots} from './reducers'
// import Card from "./Card"
// import CardList from "./CardList"

import * as serviceWorker from './serviceWorker';
// create store
const store=createStore(searchRobots)
ReactDOM.render(
	<div>

		<App store={store}/>

	</div>



	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
