import React from "react";
import style from "./ContentBox.module.css";

export const ContentBox = ({ children, customClassName, customStyle }) => {
	return (
		<div className={`${style.contentBox__container} ${customClassName}`} style={customStyle}>
			{children}
		</div>
	);
};
