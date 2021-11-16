import { SET_TODO_INPUT } from './constants';
import { ADD_TODO_INPUT } from './constants';

export function setTodoInput(payload) {
	return {
		type: SET_TODO_INPUT,
		payload,
	};
}

export function addTodoInput(payload) {
	return {
		type: ADD_TODO_INPUT,
		payload,
	};
}
