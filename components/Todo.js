import React from 'react'

export default class Todo extends React.Component {
	render() {
		return (
			<div>
				<input 
					type = "checkbox"
					onClick = { this.props.onClick }
				/>
				<li
					style={{
	        			textDecoration: this.props.completed ? 'line-through' : 'none',
	        			cursor: this.props.completed ? 'default' : 'pointer'
	        		}}
				>
				{ this.props.text }
				</li>
			</div>
		)
	}
}

Todo.propTypes = {
	onClick: React.PropTypes.func.isRequired,
	text: React.PropTypes.string.isRequired,
	completed: React.PropTypes.bool.isRequired
}