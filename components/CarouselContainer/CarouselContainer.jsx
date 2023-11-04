import React, { useEffect, useRef, useState } from "react";

import styles from "./CarouselContainer.module.css";

import iconArrow2 from "@/assets/solutions/icon-arrow-2.png";
import Image from "next/image";

export const CarouselContainer = ({
	children,
	scrollLeftNumber = 270,
	fixSpacingBottom = false,
}) => {
	// scroll function
	const scrollContainerRef = useRef(null);

	const handleButtonClick = (direction) => {
		if (scrollContainerRef.current) {
			const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
			const remainingScroll = scrollWidth - clientWidth - scrollLeft;
			if (direction === "left") {
				scrollContainerRef.current.scrollLeft -= scrollLeftNumber;
			}

			if (direction === "right") {
				if (Math.floor(remainingScroll) === 0) {
					scrollContainerRef.current.scrollLeft = 0;
				} else {
					scrollContainerRef.current.scrollLeft += scrollLeftNumber;
				}
			}
		}
	};

	useEffect(() => {
		let intervalId = null;

		const handleStartScrolling = () => {
			intervalId = setInterval(() => {
				if (scrollContainerRef.current) {
					const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
					const remainingScroll = scrollWidth - clientWidth - scrollLeft;

					if (Math.floor(remainingScroll) === 0) {
						scrollContainerRef.current.scrollLeft = 0;
					} else {
						scrollContainerRef.current.scrollLeft += scrollLeftNumber;
					}
				}
			}, 7000);
		};

		const handleStopScrolling = () => {
			clearInterval(intervalId);
		};

		handleStartScrolling();

		return () => {
			handleStopScrolling();
		};
	}, [scrollLeftNumber]);

	return (
		<div className={styles.carousel__container}>
			<div className={styles.items__container}>
				{/* Arrow left */}
				<div
					className={`${styles.button__left} ${styles.button__container}`}
					onClick={() => handleButtonClick("left")}
				>
					<Image className={styles.button__icon} src={iconArrow2} alt="icono de flecha" />
				</div>

				{/* Cards */}
				<div className={`${styles.scroll__container} `} ref={scrollContainerRef}>
					{children}
				</div>

				{/* Arrow right */}
				<div
					className={`${styles.button__right} ${styles.button__container}`}
					onClick={() => handleButtonClick("right")}
				>
					<Image className={styles.button__icon} src={iconArrow2} alt="icono de flecha" />
				</div>
			</div>
		</div>
	);
};
