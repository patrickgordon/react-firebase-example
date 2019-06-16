import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { withFirestore } from "react-firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Review from "./Review";

const MOCK_REVIEWS = [
	{
		id: "1",
		reviewer: "Bob Bobbington",
		body: "This place sux.",
		vote: "down"
	},
	{
		id: "2",
		reviewer: "Regina Filangi",
		body: "I agree with Bob!",
		vote: "down"
	},
	{
		id: "3",
		reviewer: "Patrick G",
		body: "Food is amazing",
		vote: "up"
	}
]

const ReviewsList = (props) => {
	const { isShowModal, onHide, name, firestore, restaurauntId } = props;

	const [reviews = [], isLoadingReviews] = useCollectionData(
		firestore.doc(`restaurants/${restaurauntId}`).collection("reviews"),
		{ idField: "id" }
	);

	// const reviews = MOCK_REVIEWS;

	return (
		<Modal show={isShowModal} onHide={onHide} centered size="lg">
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Reviews for {name}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{reviews.length === 0 && !isLoadingReviews &&
					<span>No reviews yet.</span>
				}
				{reviews.map(review => {
					return <Review key={review.id} {...review} />
				})}
		</Modal.Body>
			<Modal.Footer>
				<Button>Leave review</Button>
				<Button variant="light" onClick={onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

// export default ReviewsList;
export default withFirestore(ReviewsList);