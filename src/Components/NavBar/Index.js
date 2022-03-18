import React from 'react';
import { Nav, Text, Language } from './Style';

export default function NavBar({cambiarIdioma, idioma, setIdioma}) {

	return(
		<Nav>
			<Language onClick={cambiarIdioma}>
				<ion-icon name="language-outline"></ion-icon>
				<Text>
					{idioma? "Español" : "English"}
				</Text>
			</Language>
		</Nav>
	);
}