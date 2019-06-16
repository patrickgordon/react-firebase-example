import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import { withFirestore } from "react-firestore";

const ReviewForm = ({ restaurauntId, firestore }) => {
	return (
		<Formik
			initialValues={{ name: "", body: "", vote: "up" }}
			validate={values => {
				let errors = {};
				if (!values.name) {
					errors.name = "Required";
				}
				if (!values.body) {
					errors.body = "Required"
				}
				return errors;
			}}
			onSubmit={async (values, { setFieldError, setSubmitting, resetForm }) => {
				try {
					await firestore.collection("restaurants").doc(restaurauntId).collection("reviews").doc().set({
						reviewer: values.name,
						body: values.body,
						vote: values.vote
					})
					resetForm();
				} catch (e) {
					setFieldError("general", e.message)
				}

				// It error'd
				if (typeof res === "undefined") {
					setSubmitting(false);
				}
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
			}) => {
				return (
					<Form onSubmit={handleSubmit}>
						  <Form.Group controlId="exampleForm.ControlSelect1">
							<Form.Control as="select" 
								name="vote"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.vote}
							>
								<option value="up">Good</option>
								<option value="down">Bad</option>
							</Form.Control>
						</Form.Group>
						<Form.Group controlId="email">
							<Form.Control
								type="text"
								name="name"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
								isInvalid={!!errors.name}
								placeholder="Your name"
							/>
							<Form.Control.Feedback type="invalid">
								{errors.name}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Control 
								as="textarea" 
								rows="3"
								name="body"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.body}
								isInvalid={!!errors.body}
								placeholder="Leave your review here..."
							/>
							<Form.Control.Feedback type="invalid">
								{errors.body}
							</Form.Control.Feedback>
						</Form.Group>
						<Button className="button" type="submit" disabled={isSubmitting}>
							Leave review
						</Button>
					</Form>
				);
			}}
		</Formik>
	);
}

export default withFirestore(ReviewForm);