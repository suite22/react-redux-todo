export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILTY_FILTER = 'SET_VISIBILTY_FILTER'

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let nextTodoId = 0

export function addTodo(text) {
	return {
		id: nextTodoId++,
		type: ADD_TODO,
		text
	}
}

export function completeTodo(id) {
	return { 
		id,
		type: COMPLETE_TODO
	}
}

export function setVisibilityFilter(filter) {
	return { type: SET_VISIBILTY_FILTER, filter }
}