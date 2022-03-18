import React, {useState} from 'react';
import {Contenedor, Ronda, Energias, BtnContainer, Restar, Sumar, Siguiente, Inicio} from './Style'

export default function Contador({cambiarIdioma, idioma, setIdioma}) {
	const [contador, setContador] = useState(3);
	const [ronda, setRonda] = useState(1);

	const sumar = ()=> {
		if(contador < 10) {
			setContador(contador + 1);
		}
	};
	const restar = ()=> {
		if(contador > 0) {
			setContador(contador - 1);
		}
	};
	const siguiente = ()=> {
		setRonda(ronda + 1);
		if(contador === 9) {
			setContador(contador + 1)
		} else if(contador < 10) {
			setContador(contador + 2);
		}
	};
	const inicio = ()=> {
		setContador(3)
		setRonda(1)
	};
	return(
		<Contenedor>
			<Ronda>{idioma? "Ronda" : "Round"} {ronda}</Ronda>
			<Energias>{contador} / 10</Energias>
			<BtnContainer>
				<Restar onClick={restar}>{idioma? "- Energía":"- Energy"}</Restar>
				<Sumar onClick={sumar}>{idioma? "+ Energía":"+ Energy"}</Sumar>
				<Inicio onClick={inicio}>{idioma? "Nueva arena":"New arena"}</Inicio>
				<Siguiente onClick={siguiente}>{idioma? "Siguiente ronda":"Next round"}</Siguiente>
			</BtnContainer>
		</Contenedor>
	);
}