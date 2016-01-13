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
			</div>
		)
	}
}

TodoList.propTypes = {
	onTodoClick: React.PropTypes.func.isRequired,
	todos: React.PropTypes.arrayOf(React.PropTypes.shape({
		text: React.PropTypes.string.isRequired,
		completed: React.PropTypes.bool.isRequired
	}).isRequired).isRequired
}