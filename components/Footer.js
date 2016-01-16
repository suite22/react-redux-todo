import React from 'react'

export default class Footer extends React.Component {
	renderUndo() {
		return (
			<div>
				<button onClick={this.props.onUndo} disabled={this.props.undoDisabled}>Undo</button>
				<button onClick={this.props.onRedo} disabled={this.props.redoDisabled}>Redo</button>
			</div>
		)
	}
	
	render() {
		return (
			<div className="footer">
				{ this.renderUndo() }
			</div>
		)
	}
}

Footer.propTypes = {
	onUndo: React.PropTypes.func.isRequired,
	onRedo: React.PropTypes.func.isRequired,
	undoDisabled: React.PropTypes.bool.isRequired,
	redoDisabled: React.PropTypes.bool.isRequired
}
