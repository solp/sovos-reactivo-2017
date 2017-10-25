import React, {Component} from 'react';
import Header from './sovos-reactivo/componentes/Header';
import MainMenu from './sovos-reactivo/componentes/menues/MainMenu';
import LeftMenu from './sovos-reactivo/componentes/menues/LeftMenu';
import NewSection from './sovos-reactivo/componentes/new/NewSection';
import styles from '../styles/style.scss';

class App extends Component {

  render() {

   	let newsList = [
 		{
 			title: 'Por que Marisol no usa un editor como la gente?',
	 		content: '<strong>Los compas del curso se preguntan</strong>que pasa con el editor que usa esta alumna, el cual no posee ni siquiera color en las fuentes. No es novedad que esta un poco mal de la cabeza pero les parece demasiado que llegue a este tipo de acciones como las de usar un editor solo en gris y negro.',
	 		date: 'Octubre 22, 2017',
	 		creator: 'Marisol Pagola',
	 		quantityOfComments: 'Sin Comentarios'
	 	},
	 	{
 			title: 'Comentarios sobre el profe JPG',
	 		content: 'Muchos alumnos se llegaron por SRN para elogiar al profesor de ese curso, segun cuentan al parecer el joven es muy bueno enseniando, ayudando y desarrollando aplicaciones en React.',
	 		date: 'Octubre 22, 2017',
	 		creador: 'Marisol Pagola',
	 		quantityOfComments: '20 Comentarios'
	 	},
	 	{
 			title: 'Que paso en el After-Rafting?',
	 		content: 'Algunos alumnos del curso se quedaron en salta luego del rafting, SRN (sovos reactivo news) pudo hablar con algunos de ellos sobre lo que hicieron el finde largo en Salta la Linda.Segun uno de los entrevistados, algunos fueron a la iglesia el sabado a la maniana otros a visitar museos y comprar articulos regionales. Un aplauso para los reactivos que saben vivir la vida!',
	 		date: 'Octubre 22, 2017',
	 		creator: 'Marisol Pagola',
	 		quantityOfComments: '99+ Comentarios'
	 	}	 	
 	];

 	let studentsList = [
		{name: 'Peter'},
		{name: 'Mocho'},
		{name: 'Ernesto'},
		{name: 'Perro'},
		{name: 'Ivan'},
		{name: 'Facu'},
		{name: 'Eugen'},
		{name: 'Tincho'},
		{name: 'Marisol'}
	];

 	let options = [
		{name: 'Infragantti'},
		{name: 'Jarriadas'},
		{name: 'Cenas de fin de año'},
		{name: 'Día del Trabajador'}
	];

	let ultimosPuterios = [
		{name: "Octubre 17, 2017"},
		{name: "Octubre 18, 2017"},
		{name: "Octubre 19, 2017"},
	];


    return (  	
        <div className="container">
            <Header />
            <MainMenu options = {options} home = {'Noticias'}/>
            <LeftMenu items = {studentsList} items2 = {ultimosPuterios} title1 = {'MENU'} title2 = {'ÚLTIMOS PUTERÍOS'} />    		
            <NewSection newsList = {newsList}/>
        </div>
      
    );
  }
}

export default App;
