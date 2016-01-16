import React from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { addTodo, editTodo, deleteTodo, toggleCompletionTodo, toggleEditing } from '../actions'
import Header from './Header'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

class App extends React.Component {
	render() {
		const { dispatch, todos } = this.props
		return (
			<div>
				<Header />
				<TodoList
					todos = { todos }
					onTodoClick = { id => dispatch(toggleCompletionTodo(id))}
					onEdit = { id => dispatch(toggleEditing(id))}
					onSave = { (id, newText) => dispatch(editTodo(id, newText))}
					onDelete = { id => dispatch(deleteTodo(id))}
				/>
				<AddTodo
					onAddSubmit = { text => dispatch(addTodo(text))} 
				/>
				<Footer 
					onUndo = { () => dispatch(ActionCreators.undo())}
					onRedo = { () => dispatch(ActionCreators.redo())}
					undoDisabled = { this.props.undoDisabled }
					redoDisabled = { this.props.redoDisabled }
				/>
			</div>
		)
	}
}

function select(state) {
	return {
		undoDisabled: state.todos.past.length === 0,
		redoDisabled: state.todos.future.length === 0,
		todos: state.todos.present
	}
}

App.propTypes = {
	dispatch: React.PropTypes.func.isRequired,
	todos: React.PropTypes.arrayOf(React.PropTypes.shape({
		text: React.PropTypes.string.isRequired,
		editing: React.PropTypes.bool.isRequired,
		completed: React.PropTypes.bool.isRequired
	}).isRequired).isRequired,
	undoDisabled: React.PropTypes.bool.isRequired,
	redoDisabled: React.PropTypes.bool.isRequired
}

export default connect(select)(App)