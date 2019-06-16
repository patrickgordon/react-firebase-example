import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useAuthState } from 'react-firebase-hooks/auth';

import { breakpoints } from "../utils/cssHelpers";
import firebase from "../utils/firebase";
import SignupForm from "./SignupForm";

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
const auth = firebase.auth();

const Header = () => {
	const [isShowModal, showModal] = useState(false);
	
	const [user, loadingUser] = useAuthState(auth);

	useEffect(() => {
		if (user) {
			showModal(false);
		}
	}, [user]);

	return (
		<Row>
			<Col>
				<Root>
					<H1>Restaurantly &trade;</H1>
					{user 
						? <div>Logged in as {user.email}</div>
						: loadingUser ? "loading..." : <Button onClick={() => showModal(true)}>Sign up</Button>
					}
					<SignupForm isShowModal={isShowModal} onHide={() => showModal(false)} auth={auth} />
				</Root>
			</Col>
		</Row>
	);
}

export default Header;