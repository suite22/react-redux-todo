export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TEXT'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const TOGGLE_EDITING = 'TOGGLE_EDITING'

let nextTodoId = 0

export function addTodo(text) {
	return {
		id: nextTodoId++,
		type: ADD_TODO,
		text
	}
}

export function editTodo(id, text) {
	return {
		id,
		text,
		type: EDIT_TODO
	}
}

export function deleteTodo(id) {
	return {
		id,
		type: DELETE_TODO
	}
}

export function toggleTodo(id) {
	return { 
		id,
		type: TOGGLE_TODO
	}
}

export function toggleEditing(id) {
	return {
		id,
		type: TOGGLE_EDITING
	}
}