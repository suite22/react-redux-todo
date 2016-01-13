import React from 'react';
import Todo from './Todo'

export default class TodoList extends React.Component {
	render() {
		return (
			<div>
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