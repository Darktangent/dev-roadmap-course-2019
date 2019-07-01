import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "tachyons"
import {Provider} from "react-redux"
import {createStore, applyMiddleware,combineReducers} from 'redux'
import App from './containers/App';
import {createLogger} from  'redux-logger'
import {searchRobots,requestRobots} from './reducers'
import thunkMiddleware from 'redux-thunk'
// import Card from "./Card"
// import CardList from "./CardList"

import * as serviceWorker from './serviceWorker';
// create store
const logger=createLogger();
const rootReducer=combineReducers({searchRobots,requestRobots})
const store=createStore(rootReducer, applyMiddleware(thunkMiddleware,logger))
ReactDOM.render(
	<div>

		<Provider store={store}><App /></Provider>

	</div>



	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
