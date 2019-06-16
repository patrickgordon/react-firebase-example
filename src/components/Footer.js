import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Root = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	color: #b0b0b0;
`;

const Footer = () => {
	return (
		<Row>
			<Col>
				<Root>
					<span><em>"The Next Facebook"</em> - No one.</span>
				</Root>
			</Col>
		</Row>
	);
}

export default Footer;