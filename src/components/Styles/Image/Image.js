import React, { useState } from "react";
import PropTypes from "prop-types";

import Vertical from "./Vertical";
import BaseImage from "@components/BaseImage";
import PopupZoom from "@components/PopupZoom";
import Description from "../Description";

const Image = ({ images, caption }) => {
	const [isClicked, setClicked] = useState(false);
	const [currentIndex, setIndex] = useState(0);

	const imageList = images.map((image, index) => {
		return (
			<div key={"image" + index} className="grid-col-3 article-image_b">
				<div className="article-image" onClick={() => showModal(index)}>
					<BaseImage formats={image} targets={[680, 432, 328, 328, 328]} type="photo" />
				</div>
			</div>
		);
	});

	const showModal = (index) => {
		setIndex(index);
		setClicked(true);
	};

	const next = () => {
		if (images.length <= currentIndex + 1) {
			setIndex(0);
		} else {
			setIndex(currentIndex + 1);
		}
	};

	const prev = () => {
		if (currentIndex - 1 < 0) {
			setIndex(images.length - 1);
		} else {
			setIndex(currentIndex - 1);
		}
	};

	const closeModal = () => setClicked(false);

	return (
		<React.Fragment>
			{imageList}

			{caption ? (
				<div className="grid-col-6 article-images__caption">
					<div className="article-images__caption-content">
						<Description.D2>
							{caption}
						</Description.D2>
					</div>
				</div>
			) : (
				""
			)}

			<PopupZoom
					isClicked={isClicked}
					images={images}
					currentIndex={currentIndex}
					closeModal={closeModal}
					setIndex={setIndex}
					next={next}
					prev={prev} />
		</React.Fragment>
	);
};

Image.propTypes = {
	images: PropTypes.array,
	caption: PropTypes.string,
};

Image.Vertical = Vertical;

export default Image;
