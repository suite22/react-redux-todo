import React from 'react';
import Todo from './Todo'

export default class TodoList extends React.Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.todos.map(todo =>
						<Todo { ...todo }
							key = { todo.id }
							onClick = { () => this.props.onTodoClick(todo.id)}
						/>
					)}
				</ul>
				<input placeholder="input todo"></input>
			</div>
		)
	}
}

TodoList.propTypes = {
	onTodoClick: propTypes.func.isRequired,
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired
}