import React from 'react';

class HeroeItem extends React.Component {
	render() {
		return (
  			<li className="media">
    			<div className="media-left">
      				<a href="#">
        				<img className="media-object" src={this.props.imagen} alt={this.props.nombre}/>
      				</a>
    			</div>
    			<div className="media-body">
      				<h4 className="media-heading">{this.props.nombre}</h4>
      				<p>{this.props.comic}</p>
				</div>
  			</li>
		)
	}
}

module.exports = HeroeItem;