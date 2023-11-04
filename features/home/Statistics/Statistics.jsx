import React from "react";
import style from "./Statistics.module.css";
import Image from "next/image";
import { Section } from "@/components/Section/Section";
import { ContentBox } from "@/components/ContentBox/ContentBox";

import imgMariaPose2 from "@/assets/maria-pose2.png";

export const Statistics = () => {
	return (
		<Section customClassName={style.section__container}>
			<ContentBox customClassName={style.statistics__content}>
				<div className={style.text__container}>
					<div className={style.text__item__1}>
						<p className={style.title}>600</p>
						<p className={style.description}>Mujeres ya se sienten más seguras.</p>
					</div>
					<hr />
					<div className={style.text__item__2}>
						<p className={style.title}>6 casos</p>
						<p className={style.description}>De incidencias reportadas</p>
					</div>
				</div>
				<div className={style.img__container}>
					<Image className={style.img} src={imgMariaPose2} alt="imagen de maria" />
				</div>
			</ContentBox>
		</Section>
	);
};
