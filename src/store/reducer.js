import { SET_TODO_INPUT } from './constants';
import { ADD_TODO_INPUT } from './constants';

const initState = {
	todos: [],
	todoInput: '',
};

function reducer(state = initState, action) {
	switch (action.type) {
		case SET_TODO_INPUT:
			return {
				...state,
				todoInput: action.payload,
			};
		case ADD_TODO_INPUT:
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		default:
			return state;
	}
}

export default reducer;
