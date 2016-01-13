import React from 'react'

export default class Todo extends React.Component {
	render() {
		return (
			<li
				onClick = { this.props.onClick }
			>
			{ this.props.text }
			</li>
		)
	}
}

Todo.propTypes = {
	onClick: React.PropTypes.func.isRequired,
	text: React.PropTypes.string.isRequired,
	completed: React.PropTypes.bool.isRequired
}