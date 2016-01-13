import React from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo } from '../actions'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class App extends React.Component {
	render() {
		const { dispatch, visibleTodos } = this.props
		return (
			<div>
				<AddTodo
					onAddSubmit = { text => dispatch(addTodo(text))} 
				/>
				<TodoList
					todos = { visibleTodos }
					onTodoClick = { id => dispatch(completeTodo(id))}
				/>
			</div>
		)
	}
}