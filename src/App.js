import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { Provider } from './context';
import Lyrics from './components/tracks/Lyrics';

class App extends Component {
	render() {
		return (
			<Provider>
				<Navbar />
				<div className="container">
					<Switch>
						<Route exact path="/" component={Index} />
						<Route exact path="/lyrics/track/:id" component={Lyrics} />
					</Switch>
				</div>
			</Provider>
		);
	}
}

export default App;
