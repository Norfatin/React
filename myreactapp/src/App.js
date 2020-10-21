import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
	return (
		<div className="App">
			<h1> Hi, I'm a React app.</h1>
			<p>p/s: this is really working</p>
			<Person />
		</div>
		//React.createElement('div',{ className: 'App' },React.createElement('h1', null, "Hi, I'm a React app!!"))
	);
}

export default App;
