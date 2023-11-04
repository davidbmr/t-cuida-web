import React from "react";
import style from "./Section.module.css";

export const Section = ({ children, customStyle, customClassName }) => {
	return (
		<section className={`${style.section__container} ${customClassName}`} style={customStyle}>
			{children}
		</section>
	);
};
