import React from "react";
import Modal from "react-bootstrap/Modal";
import { withFirestore } from "react-firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import Review from "./Review";
import firebase from "../utils/firebase";
import ReviewForm from "./ReviewForm";

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

const auth = firebase.auth();

const ReviewsList = (props) => {
	const { isShowModal, onHide, name, firestore, restaurauntId } = props;
	const [user] = useAuthState(auth);

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
		{user &&
			<Modal.Footer style={{ display: "block" }}>
				<ReviewForm restaurauntId={restaurauntId} />
			</Modal.Footer>
		}
		</Modal>
	);
}

// export default ReviewsList;
export default withFirestore(ReviewsList);