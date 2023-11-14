import React, { useEffect, useCallback, useRef, useState } from "react";
import PropType from "prop-types";
import ReactModal from "react-modal";
import { useRetina } from "@helpers/useRetina";
import QuickPinchZoom, {
	make3dTransformValue,
} from "react-quick-pinch-zoom-with-swipe";

import CloseModal from "./CloseZoom";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import ZoomInfo from "./ZoomInfo";
import ZoomDownload from "./DownloadZoomImage";

const PopupZoom = ({ images, isClicked, closeModal, currentIndex, next, prev, desc }) => {

    const [isOnePictureFlag, setOnePictureFlag] = useState(false);
		const [cursorCl, setCursorCl] = useState('');

    // TODO: Конечно это бы вынести в отдельный компонент, типа BaseModal,
	useEffect(() => {
		if (typeof window !== "undefined") {
			ReactModal.setAppElement("body");
		}

        isOnePicture();

	}, [images]);

	const currentImage = useRetina({
		image: images[currentIndex],
		targets: [8000, 8000, 8000, 8000, 8000],
		type: "photo",
	}).defaultUrl;

	const imgRef = useRef();
	const zoomInstance = useRef();

	const onUpdate = useCallback(({ x, y, scale }) => {
		const { current: img } = imgRef;

		if (img) {
			const value = make3dTransformValue({ x, y, scale });
			img.style.setProperty("transform", value);
		}
	}, []);

	const isOnePicture = () => {
		images.length == 1 ? setOnePictureFlag(true) : setOnePictureFlag(false);
	};

	const reset = () => {
		zoomInstance.current.scaleTo({ x: 0, y: 0, scale: 1 });
	};

	const nextControl = () => {
		reset();
		next();
	};

	const prevControl = () => {
		reset();
		prev();
	};

	const onDragStart = () => {
		setCursorCl('zoom_cursor-drag')
	}

	const onDragEnd = () => {
		setCursorCl('zoom_cursor-in')
	}

	const shouldInterceptWheel = () => false;

	return (
		<React.Fragment>
			<ReactModal
				isOpen={isClicked}
				className="zoom"
				closeTimeoutMS={300}
				shouldCloseOnOverlayClick={true}
				shouldCloseOnEsc={true}
				onRequestClose={closeModal}
				overlayClassName="zoom_overlay zoom_flex_center"
			>
				<CloseModal closeModal={closeModal} />
				<ZoomDownload images={images} currentIndex={currentIndex} />

				<LeftArrow isOnePicture={isOnePictureFlag} prev={prevControl} />
				<RightArrow isOnePicture={isOnePictureFlag} next={nextControl} />

				<QuickPinchZoom
					onUpdate={onUpdate}
					onSwipeLeft={prevControl}
					onSwipeRight={nextControl}
					onDragStart={onDragStart}
					onDragEnd={onDragEnd}
					ref={zoomInstance}
					wheelScaleFactor={1000}
					shouldInterceptWheel={shouldInterceptWheel}
				>
					<div
						ref={imgRef}
						style={{ backgroundImage: `url(${currentImage})` }}
						className={`zoom__place ${cursorCl}`}
					/>
				</QuickPinchZoom>

				<ZoomInfo desc={desc} isOnePicture={isOnePictureFlag} images={images} currentIndex={currentIndex} />
			</ReactModal>
		</React.Fragment>
	);
};

PopupZoom.propTypes = {
	images: PropType.array,
	isClicked: PropType.bool,
	closeModal: PropType.func,
	setIndex: PropType.func,
	currentIndex: PropType.number,
	next: PropType.func,
	prev: PropType.func,
	desc: PropType.string
};

export default PopupZoom;
