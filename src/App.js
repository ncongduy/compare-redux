import React from 'react';
import { ListTodo, TestReRender } from './components';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<ListTodo />
			<TestReRender />
		</div>
	);
};

export default App;
