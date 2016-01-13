export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'

let nextTodoId = 0

export function addTodo(text) {
	return {
		id: nextTodoId++,
		type: ADD_TODO,
		text
	}
}

export function completeTodo(id) {
	return { type: COMPLETE_TODO, id }
}