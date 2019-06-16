import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";

const GeneralError = styled.div`
	margin-bottom: 12px;
	color: red;
`;

const SignupForm = (props) => {
	const { isShowModal, onHide, auth, user } = props;

	return (
		<Modal show={isShowModal} onHide={onHide} centered size="lg">
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Sign up
			</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Formik
					initialValues={{ email: "", password: "" }}
					validate={values => {
						let errors = {};
						if (!values.email) {
							errors.email = "Required";
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							errors.email = "Invalid email address";
						}
						return errors;
					}}
					onSubmit={async (values, { setFieldError, setSubmitting }) => {
						try {
							await auth.createUserWithEmailAndPassword(values.email, values.password);
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
								{errors.general && 
									<GeneralError className="has-text-danger">{errors.general}</GeneralError>
								}
								<Form.Group controlId="email">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										name="email"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.email}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										name="password"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.password}
									/>
								</Form.Group>
								<Button className="button" type="submit" disabled={isSubmitting}>
									Sign up
							</Button>
							</Form>
						);
					}}
				</Formik>
			</Modal.Body>
		</Modal>
	);
}

export default SignupForm;