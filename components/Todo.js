import React from 'react'

export default class Todo extends React.Component {
	handleSave(event) {
		event.preventDefault()
		const node = this.refs.editInput
		const text = node.value.trim()
		if (text) {
			this.props.onSaveSubmit(text)
		}
	}
	
	render() {
		var isEditing
		
		if (this.props.editing === false) {
			// Display the todo item with a checkbox for completion
			isEditing = (
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
				</div>
			)
		} else {
			// Input field for editing the task title
			isEditing = (
				<form onSubmit = { (event) => this.handleSave(event) }>
					<input type="text" ref="editInput" defaultValue={this.props.text} />
					<button>
						Save
					</button>
				</form>
			)
		}
		
		return (
			<div>
				{ isEditing }
			</div>
		)
	}
}

Todo.propTypes = {
	onCheckboxClick: React.PropTypes.func.isRequired,
	onSaveSubmit: React.PropTypes.func.isRequired,
	onEditClick: React.PropTypes.func.isRequired,
	text: React.PropTypes.string.isRequired,
	editing: React.PropTypes.bool.isRequired,
	completed: React.PropTypes.bool.isRequired
}