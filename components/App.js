import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, toggleEditing } from '../actions'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

class App extends React.Component {
	render() {
		const { dispatch, todos } = this.props
		return (
			<div>
				<AddTodo
					onAddSubmit = { text => dispatch(addTodo(text))} 
				/>
				<TodoList
					todos = { todos }
					onTodoClick = { id => dispatch(toggleTodo(id))}
					onEdit = { id => dispatch(toggleEditing(id))}
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