import React from 'react'

export default class TodoItem extends React.Component {
	handleSave(event) {
		event.preventDefault()
		const node = this.refs.editInput
		const text = node.value.trim()
		if (text) {
			this.props.onSaveSubmit(text)
		}
	}
	
	handleDelete(event) {
		event.preventDefault()
		this.props.onDeleteSubmit()
	}
	
	render() {
		var isEditing
		
		if (this.props.editing === false) {
			// Display the todo item with a checkbox for completion
			isEditing = (
				<div className="todoDisplay">
					<input 
						type = "checkbox"
						checked = { this.props.completed }
						onChange = { this.props.onCheckboxClick }
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
					<button onClick = { (event) => this.handleDelete(event)}>
						Delete
					</button>
				</div>
			)
		} else {
			// Input field for editing the task title
			isEditing = (
				<div className="todoEdit">
					<form onSubmit = { (event) => this.handleSave(event) }>
						<input type="text" ref="editInput" defaultValue={this.props.text} />
						<button>
							Save
						</button>
					</form>
				</div>
			)
		}
		
		return (
			<div>
				{ isEditing }
			</div>
		)
	}
}

TodoItem.propTypes = {
	onCheckboxClick: React.PropTypes.func.isRequired,
	onSaveSubmit: React.PropTypes.func.isRequired,
	onDeleteSubmit: React.PropTypes.func.isRequired,
	onEditClick: React.PropTypes.func.isRequired,
	text: React.PropTypes.string.isRequired,
	editing: React.PropTypes.bool.isRequired,
	completed: React.PropTypes.bool.isRequired
}