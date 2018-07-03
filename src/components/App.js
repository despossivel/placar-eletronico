import React from 'react';
import PlacarContainer from './PlacarContainer';


const dados = {
	partida:{
		estadio:"Mane garrincha",
		data:"12/08/2018",
		horario:"19:00h"
	},
	casa:{
		nome:"Vasco"
	},
	visitante:{
		nome: "Gremio"
	},
	 tempo:92
};





export default class App extends React.Component {
	render(){
		return <PlacarContainer {...dados} />;
	}
}


