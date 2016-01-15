import React from 'react'
import { connect } from 'react-redux'
import { addTodo, editTodo, toggleTodo, toggleEditing } from '../actions'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

class App extends React.Component {
	render() {
		const { dispatch, todos } = this.props
		return (
			<div>
				<TodoList
					todos = { todos }
					onTodoClick = { id => dispatch(toggleTodo(id))}
					onEdit = { id => dispatch(toggleEditing(id))}
					onSave = { text => dispatch(editTodo(text))}
				/>
				<AddTodo
					onAddSubmit = { text => dispatch(addTodo(text))} 
				/>
			<Footer />
			</div>
		)
	}
}

function select(state) {
	return {
		todos: state.todos
	}
}

App.propTypes = {
	dispatch: React.PropTypes.func.isRequired,
	todos: React.PropTypes.arrayOf(React.PropTypes.shape({
		text: React.PropTypes.string.isRequired,
		editing: React.PropTypes.bool.isRequired,
		completed: React.PropTypes.bool.isRequired
	}).isRequired).isRequired,
}

export default connect(select)(App)