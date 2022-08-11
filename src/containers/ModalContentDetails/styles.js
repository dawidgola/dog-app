import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const BodyContainer = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	max-height: 650px;
`;

export const ManageContainer = styled.div`
	text-align: center;
`;

export const ImageContainer = styled.div`
	display: flex;
	margin: 16px;
	max-height: 600px;

	img {
		max-width: 400px;
	}
`;
