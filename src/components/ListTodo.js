import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actions } from '../store';

export default function ListTodo() {
	const dispatch = useDispatch();
	const todoInput = useSelector((state) => state.todoInput);
	const todos = useSelector((state) => state.todos);
	const inputRef = useRef();

	function handleAdd() {
		dispatch(actions.addTodoInput(todoInput));
		dispatch(actions.setTodoInput(''));
		inputRef.current.focus();
	}

	return (
		<>
			<input
				ref={inputRef}
				value={todoInput}
				placeholder='Enter todo...'
				onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
			/>
			<button onClick={handleAdd}>Add</button>
			<ul>
				{todos.length > 0 &&
					todos.map((todo, index) => <li key={index}>{todo}</li>)}
			</ul>
		</>
	);
}
