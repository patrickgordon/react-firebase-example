import React from "react";
import styled from "styled-components";

import Media from "react-bootstrap/Media"
import up from "./up.png";
import down from "./down.png";

const VOTES = {
	up,
	down,
}

const FALLBACK = "http://placehold.it/32x32"

const Root = styled.div`
	margin-bottom: 12px;
`;

const Review = ({ reviewer, body, vote }) => {
	return (
		<Root>
			<Media>
				<img
					width={32}
					height={32}
					className="mr-3"
					src={VOTES[vote] || FALLBACK}
					alt="Generic placeholder"
				/>
				<Media.Body>
					<h5>{reviewer}</h5>
					<p>
						{body}
					</p>
				</Media.Body>
			</Media>
		</Root>
	);
}

export default Review;