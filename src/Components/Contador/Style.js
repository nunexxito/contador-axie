import styled from 'styled-components';

export const Contenedor = styled.div`
	text-align: center;
`;

export const Ronda = styled.h1`
	background-color: rgba(255, 255, 255, 0.3);
	border-radius: 5px;
	padding: 10px 20px;
	font-size: 30px;
	display: inline;
`;

export const Energias = styled.p`
	font-size: 30px;
`;

export const BtnContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 380px;
	gap: 20px;
	margin: 0 auto;
`;

export const Restar = styled.button`
	border: none;
	background-color: #fff;
	border-radius: 5px;
	padding: 10px 20px;
	font-weight: 900;
	font-size: 18px;
	cursor: pointer;

	&:hover {
		background-color: #ebebeb;
	}
`;

export const Sumar = styled.button`
	border: none;
	background-color: #fff;
	border-radius: 5px;
	padding: 10px 20px;
	font-weight: 900;
	font-size: 18px;
	cursor: pointer;

	&:hover {
		background-color: #ebebeb;
	}
`;

export const Siguiente = styled.button`
	border: none;
	background-color: #0084ff;
	border-radius: 5px;
	padding: 10px 20px;
	font-weight: 700;
	font-size: 18px;
	cursor: pointer;
	color: #fff;

	&:hover {
		background-color: #0078e9;
	}
`;

export const Inicio = styled.button`
	border: none;
	background-color: #b700ff;
	border-radius: 5px;
	padding: 10px 20px;
	font-weight: 700;
	font-size: 18px;
	cursor: pointer;
	color: #fff;

	&:hover {
		background-color: #a400e6;
}
`;