import styled from "styled-components";

export default styled.div`
	text-align: center;
	color: ${({ color }) => `${color || "black"}`};
	font-size: ${({ primary }) => (primary ? "16px" : "36px")};
	margin: ${({ primary }) => (primary ? "5px" : "16px")};
	font-weight: ${({ bold }) => bold && "bold"};
	padding: 2px;
`;
