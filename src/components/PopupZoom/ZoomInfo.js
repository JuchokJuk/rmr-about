import React from "react";
import PropType from "prop-types";
import Paragraph from "@components/Styles/Paragraph";

const ZoomInfo = ({ closeModal, currentIndex, images, desc, isOnePicture }) => {

	const hideCounter = isOnePicture && desc;

	return (
		<React.Fragment>
			<div className={`zoom__controls ${isOnePicture & !desc ? 'zoom_hide-control' : ''}`} onClick={closeModal}>
				<div className={`zoom__count ${hideCounter ? 'zoom_hide-control' : ''}`}>
					<Paragraph.P3 className="zoom__current" content={`${currentIndex + 1}`} />
					<Paragraph.P3 className="zoom__separator">/</Paragraph.P3>
					<Paragraph.P3 className="zoom__amount" content={`${images.length}`} />
				</div>

				<div className={`zoom__description ${hideCounter ? 'zoom_center' : ''}`}>
					<Paragraph.P3>
						{ desc }
					</Paragraph.P3>
				</div>
			</div>
		</React.Fragment>
	);
};

ZoomInfo.propTypes = {
	closeModal: PropType.func,
	desc: PropType.string,
	currentIndex: PropType.number,
	images: PropType.array,
	isOnePicture: PropType.bool
};

export default ZoomInfo;
