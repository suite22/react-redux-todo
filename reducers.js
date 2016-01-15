import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO } from './actions'

function todo(state, action) {
	switch (action.type) {
		case ADD_TODO:
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case TOGGLE_TODO:
			if (state.id !== action.id) {
				return state
			}
			return {
				id: action.id,
				text: state.text,
				// TODO: Does flipping the state like this in the reducer make it impure?
	        	completed: !state.completed
	        }
		default:
			return state
	}
}

function todos(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				todo(undefined, action)
			]
		case TOGGLE_TODO:
			return state.map(task =>
				todo(task, action)
			)
		default:
			return state
	}
}

const todoApp = combineReducers({
	todos: todos
})

export default todoApp