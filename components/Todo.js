import React from 'react'

export default class Todo extends Component {
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