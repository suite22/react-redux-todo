import React from 'react';
import Todo from './Todo'

export default class TodoList extends React.Component {
	render() {
		return (
			<div>
				<div>
					{this.props.todos.map(todo =>
						<Todo { ...todo }
							key = { todo.id }
							onCheckboxClick = { () => this.props.onTodoClick(todo.id)}
						/>
					)}
				</div>
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