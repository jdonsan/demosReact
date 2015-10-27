import React from 'react';
import HeroeItem from './heroe.item';

class HeroeList extends React.Component {
	render() {
		return (
			<ul className="media-list">
			{
				this.props.heroes.map((heroe) => {
					return <HeroeItem key={heroe.id}
						nombre={heroe.nombre}
						comic={heroe.comic}
						imagen={heroe.imagen} />
				})

			}
			</ul>
		)
	}
}

module.exports = HeroeList;
