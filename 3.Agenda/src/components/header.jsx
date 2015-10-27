import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default">
	  			<div className="container">
	    			<div className="navbar-header">
	      				<a className="navbar-brand" href="#">{this.props.titulo}</a>
	    			</div>
	  			</div>
			</nav>
		)
	}
}

module.exports = Header;