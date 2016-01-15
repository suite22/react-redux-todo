export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

let nextTodoId = 0

export function addTodo(text) {
	return {
		id: nextTodoId++,
		type: ADD_TODO,
		text
	}
}

export function toggleTodo(id) {
	return { 
		id,
		type: TOGGLE_TODO
	}
}