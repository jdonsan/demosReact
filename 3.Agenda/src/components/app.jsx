import React from 'react';
import Header from './header';
import Content from './content';
import HeroeList from './heroe.list';

let heroes = [
	{ id: 1, nombre: 'Lobezno', comic: 'Xmen', imagen: 'http://lorempixel.com/50/50/' },
	{ id: 2, nombre: 'Hombre llama', comic: 'Los 4 fantásticos', imagen: 'http://lorempixel.com/50/50/' },
	{ id: 3, nombre: 'Ant Man', comic: 'Ant Man', imagen: 'http://lorempixel.com/50/50/' },
	{ id: 4, nombre: 'Iron Man', comic: 'Los Vengadores', imagen: 'http://lorempixel.com/50/50/' }
];

class App extends React.Component {
	render() {
		return (
			<div>
				<Header titulo='MarvelApp'/>
				<Content>
					<h1>Heroes de Marvel</h1>
					<HeroeList heroes={heroes}/>
				</Content>
			</div>
		)
	}
}

module.exports = App;
