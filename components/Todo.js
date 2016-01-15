import React from 'react'

export default class Todo extends React.Component {
	render() {
		var saveButton
		
		if (this.props.editing === false) {
			// don't show the button
			saveButton = ""
		} else {
			saveButton = (
				<button onClick = { this.props.onEditClick } >
					Save
				</button>
			)
		}
		
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
					onClick = { this.props.onEditClick }
				>
				{ this.props.text }
				</label>
				{ saveButton }
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