import React from "react";
import style from "./Button.module.css";
import Link from "next/link";

export const Button = ({ path, text }) => {
	return (
		<Link href={path} className={`${style.button__container}`}>
			{text}
		</Link>
	);
};
