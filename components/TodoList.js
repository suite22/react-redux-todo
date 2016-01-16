import React from 'react';
import Todo from './Todo'

export default class TodoList extends React.Component {
	render() {
		return (
			<div>
				<div>
					{ this.props.todos.map( todo =>
						<Todo { ...todo }
							key = { todo.id }
							onCheckboxClick = { () => this.props.onTodoClick(todo.id)}
							onEditClick = { () => this.props.onEdit(todo.id)}
							onSaveSubmit = { (newText) => this.props.onSave(todo.id, newText)}
							onDeleteSubmit = { () => this.props.onDelete(todo.id)}
						/>
					)}
				</div>
			</div>
		)
	}
}

TodoList.propTypes = {
	onTodoClick: React.PropTypes.func.isRequired,
	onEdit: React.PropTypes.func.isRequired,
	onSave: React.PropTypes.func.isRequired,
	onDelete: React.PropTypes.func.isRequired,
	todos: React.PropTypes.arrayOf(React.PropTypes.shape({
		text: React.PropTypes.string.isRequired,
		editing: React.PropTypes.bool.isRequired,
		completed: React.PropTypes.bool.isRequired
	}).isRequired).isRequired
}