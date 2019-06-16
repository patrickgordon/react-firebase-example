import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { withFirestore } from "react-firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Header from "./components/Header";
import RestaurantsList from "./components/RestaurantsList";
import Footer from "./components/Footer";

const Wrapper = styled.div`
	margin-top: 24px;
`;

const SpinnerWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const MOCK_RESTAURANTS = [
	{ 
		id: "123456",
		imageSrc: "https://picsum.photos/286/180?random=1",
		name: "Fake Restaurant",
		description: "Fake mc fakington"
	}
]

const App = (props) => {
	const { firestore } = props;

	const [restaurants, isLoadingRestaurants] = useCollectionData(
		firestore.collection("restaurants").orderBy("name", "desc"),
		{ idField: "id" }
	);

	return (
		<Wrapper>
			<Container>
				<Header />
				<Row>
					{isLoadingRestaurants 
						? <SpinnerWrapper><Spinner animation="grow" /></SpinnerWrapper>
						: <RestaurantsList restaurants={restaurants} />
					}
				</Row>
				<Footer />
			</Container>
		</Wrapper>
	);
}

// export default App;
export default withFirestore(App);
