import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILTY_FILTER, VisibilityFilters } from './actions'

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILTY_FILTER:
			return action.filter
		default:
			return state
	}
}

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
	visibilityFilter,
	todos: todos
})

export default todoApp