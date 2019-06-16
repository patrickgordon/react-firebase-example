import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import styled from "styled-components";

import { breakpoints } from "../utils/cssHelpers";

const Root = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 24px;

	@media ${breakpoints.medium} {
		flex-direction: row;
	}
`;

const H1 = styled.h1``;

const Header = () => {
	return (
		<Row>
			<Col>
				<Root>
					<H1>Reviewly &trade;</H1>
					<span><em>"The Next Facebook"</em> - No one.</span>
				</Root>
			</Col>
		</Row>
	);
}

export default Header;