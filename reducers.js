import { combineReducers } from 'redux'
import { ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO, TOGGLE_EDITING } from './actions'

function todo(state, action) {
	switch (action.type) {
		case ADD_TODO:
			return {
				id: action.id,
				text: action.text,
				editing: false,
				completed: false
			}
		case EDIT_TODO:
			if (state.id !== action.id) {
				return state
			}
			return {
				id: state.id,
				text: action.text,
				editing: false,
				completed: state.completed
			}
		case TOGGLE_TODO:
			if (state.id !== action.id) {
				return state
			}
			return {
				id: action.id,
				text: state.text,
				editing: state.editing,
				// TODO: Does flipping the state like this in the reducer make it impure?
	        	completed: !state.completed
	        }
		case TOGGLE_EDITING:
			if (state.id !== action.id) {
				return state
			}
			return {
				id: action.id,
				text: state.text,
				editing: !state.editing,
				completed: state.completed
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
		case EDIT_TODO:
			return state.map(task =>
				todo(task, action)
			)
		case DELETE_TODO:
			// important to use slice here so we don't mutate the original state.
			return state
				.slice(0, action.id)
				.concat(state.slice(action.id + 1))
		case TOGGLE_TODO:
			return state.map(task =>
				todo(task, action)
			)
		case TOGGLE_EDITING:
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