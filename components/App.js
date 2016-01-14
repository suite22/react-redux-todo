import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from '../actions'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

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
					onTodoClick = { id => dispatch(toggleTodo(id))}
				/>
				<Footer
				/>
			</div>
		)
	}
}

function selectTodos(todos, filter) {
	switch (filter) {
		default:
		case VisibilityFilters.SHOW_ALL:
			return todos
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter( todo => todo.completed )
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter( todo => !todo.completed )
	}
}

function select(state) {
	return {
		visibleTodos: selectTodos(state.todos, state.visibilityFilter),
		visibilityFilter: state.visibilityFilter
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

export default connect(select)(App)