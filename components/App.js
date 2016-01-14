import React from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class App extends React.Component {
	render() {
		const { dispatch, visibleTodos, visibilityFilter } = this.props
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

function selectTodos(todos, filter) {
	switch (filter) {
		default:
			return todos
	}
}

App.propTypes = {
	dispatch: React.PropTypes.func.isRequired,
	visibleTodos: React.PropTypes.arrayOf(React.PropTypes.shape({
		text: React.PropTypes.string.isRequired,
		completed: React.PropTypes.bool.isRequired
	}).isRequired).isRequired,
	visibilityFilter: React.PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
	]).isRequired
}

function select(state) {
	return {
		visibleTodos: selectTodos(state.todos, state.visibilityFilter),
		visibilityFilter: state.visibilityFilter
	}
}

export default connect(select)(App)