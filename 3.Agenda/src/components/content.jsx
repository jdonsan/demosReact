import React from 'react';

class Content extends React.Component {
	render() {
		return (
			<div className="container">
				{this.props.children}
			</div>
		)
	}
}

module.exports = Content;