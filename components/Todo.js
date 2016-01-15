import React from 'react'

export default class Todo extends React.Component {
	render() {
		return (
			<div>
				<input 
					type = "checkbox"
					onClick = { this.props.onCheckboxClick }
				/>
				<label
					style={{
	        			textDecoration: this.props.completed ? 'line-through' : 'none',
	        			cursor: this.props.completed ? 'default' : 'pointer'
	        		}}
				>
				{ this.props.text }
				</label>
				<button
					onClick = { this.props.onEditClick} 
				>
					Edit
				</button>
			</div>
		)
	}
}

Todo.propTypes = {
	onCheckboxClick: React.PropTypes.func.isRequired,
	text: React.PropTypes.string.isRequired,
	editing: React.PropTypes.bool.isRequired,
	completed: React.PropTypes.bool.isRequired
}