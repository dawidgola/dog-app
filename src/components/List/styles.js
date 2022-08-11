import styled from "styled-components";

export const Wrapper = styled.div`
	background-color: white;
	width: 40%;
	padding: 40px 30px;
	border-radius: 25px;
	box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 600px;
`;

export const StyledList = styled.ul`
	list-style: none;
	padding: 0 10px 0 0;
	margin: 0;
	overflow: hidden;
	overflow-y: scroll;
	max-height: 600px;
	width: 100%;

	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		border-radius: 100px;
		background: lightgray;
		width: 16px;
	}

	::-webkit-scrollbar-thumb {
		width: 10px;
		border-radius: 100px;
		border: 3px solid rgba(0, 0, 0, 0);
		background-clip: padding-box;
		background-color: white;
	}
`;
