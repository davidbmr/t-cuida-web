import React from "react";
import style from "./CardSecurity.module.css";
import Image from "next/image";

export const CardSecurity = ({ title, img }) => {
	return (
		<div className={style.cardSecurity__container}>
			<p className={style.cardSecurity__title}>{title}</p>
			<div className={style.img__container}>
				<Image className={style.img__item} src={img} alt="imagen de app segura" />
			</div>
		</div>
	);
};
