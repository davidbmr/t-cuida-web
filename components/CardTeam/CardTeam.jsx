import React from "react";
import style from "./CardTeam.module.css";
import Image from "next/image";
import { Section } from "../Section/Section";

export const CardTeam = ({ name, position, img }) => {
	return (
		<div className={style.cardTeam__container}>
			<div className={style.img__contain}>
				<Image className={style.img__item} src={img} alt="imagen de una persona" />
			</div>
			<div className={style.info__contain}>
				<p className={style.info__name}>{name}</p>
				<p className={style.info__position}>{position}</p>
			</div>
		</div>
	);
};
