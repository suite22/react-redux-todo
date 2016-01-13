import React from 'react'

export default class AddTodo extends React.Component {
	handleSubmit(event) {
		event.preventDefault()
		const node = this.refs.input
		const text = node.value.trim()
		if (text) {
			this.props.onAddSubmit(text)
			node.value = ''
		}
	}
	
	render() {
		return (
			<div>
				<form onSubmit = { (event) => this.handleSubmit(event) }>
					<input type="text" ref="input" />
					<button>
						Add
					</button>
				</form>
			</div>
		)
	}
}

AddTodo.propTypes = {
	onAddSubmit: React.PropTypes.func.isRequired
}