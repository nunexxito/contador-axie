import styled from 'styled-components'

export const Nav = styled.div`
	padding: 20px;
	display: flex;
	justify-content: flex-end;
`;

export const Text = styled.div`
	margin-left: 5px;
`;

export const Language = styled.button`
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	border-radius: 5px;
	padding: 10px 20px;
	cursor: pointer;
	display: flex;

	&:hover {
		background-color: rgba(255, 255, 255, 0.5);
	}
`;