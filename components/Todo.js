import React from 'react'

export default class Todo extends React.Component {
	handleSave(event) {
		event.preventDefault()
		const node = this.refs.input
		const text = node.value.trim()
		if (text) {
			this.props.onSaveClick()
		}
	}
	
	render() {
		var isEditing
		
		if (this.props.editing === false) {
			// don't show the button
			isEditing = (
				<label
					style={{
						textDecoration: this.props.completed ? 'line-through' : 'none',
						cursor: this.props.completed ? 'default' : 'pointer'
					}}
					onClick = { this.props.onEditClick }
				>
				{ this.props.text }
				</label>
			)
		} else {
			isEditing = (
				<form onSubmit = { (event) => this.handleSave(event) }>
					<input type="text" ref="input" value={this.props.text} />
					<button>
						Save
					</button>
				</form>
			)
		}
		
		return (
			<div>
				<input 
					type = "checkbox"
					onClick = { this.props.onCheckboxClick }
				/>
				{ isEditing }
			</div>
		)
	}
}

Todo.propTypes = {
	onCheckboxClick: React.PropTypes.func.isRequired,
	onSaveClick: React.PropTypes.func.isRequired,
	onEditClick: React.PropTypes.func.isRequired,
	text: React.PropTypes.string.isRequired,
	editing: React.PropTypes.bool.isRequired,
	completed: React.PropTypes.bool.isRequired
}