import React from 'react'

export default class AddTodo extends React.Component {
	
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