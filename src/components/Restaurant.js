import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ReviewsList from "./ReviewsList";

const Restaurant = ({ id, imageSrc, name, description }) => {
	const [isShowModal, showModal] = useState(false);

	return (
		<Card>
			{imageSrc && <Card.Img variant="top" src={imageSrc} />}
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>
					{description}
				</Card.Text>
				<Button block variant="primary" onClick={() => showModal(true)}>Reviews</Button>
			</Card.Body>
			<ReviewsList 
				isShowModal={isShowModal} 
				name={name} 
				onHide={() => showModal(false)} 
				restaurauntId={id}
			/>
		</Card>
	);
}

export default Restaurant;