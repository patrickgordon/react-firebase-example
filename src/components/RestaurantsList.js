import React from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col"

import Restaurant from "./Restaurant";
import { breakpoints } from "../utils/cssHelpers";

const Root = styled.div`
	display: grid;
	grid-gap: 24px;

	@media ${breakpoints.medium} {
		grid-template-columns: 1fr 1fr;
	}

	@media ${breakpoints.large} {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

const RestaurantsList = ({ restaurants }) => {
	return (
		<Col>
			<Root>
				{restaurants.map(restaurant => {
					return <Restaurant key={restaurant.id} {...restaurant} />
				})}
			</Root>
		</Col>
	);
}

export default RestaurantsList;