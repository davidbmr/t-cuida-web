import React from "react";
import style from "./Benefits.module.css";
import Image from "next/image";
import { Section } from "@/components/Section/Section";

import imgBenefits from "@/assets/solutions/beneficios.png";
import arrow from "@/assets/home/icon-arrow.svg";

export const Benefits = () => {
	return (
		<Section customStyle={{ gap: "60px" }}>
			<div className={style.benefits__title__container}>
				<h3 className={style.benefits__title}>
					Beneficios para <span>las usuarias</span>
				</h3>

				<div className={style.arrow__content}>
					<Image className={style.info__item__image} src={arrow} alt="icono de flecha" />
				</div>
			</div>

			<div className={style.img__container}>
				<Image className={style.img} src={imgBenefits} alt="imagen de mujer" />

				<div className={`${style.box__float} ${style.box__float__1}`}>
					<p>Disminución de violencia</p>
				</div>
				<div className={`${style.box__float} ${style.box__float__2}`}>
					<p>Disminución de violencia</p>
				</div>
				<div className={`${style.box__float} ${style.box__float__3}`}>
					<p>Disminución de violencia</p>
				</div>
				<div className={`${style.box__float} ${style.box__float__4}`}>
					<p>Disminución de violencia</p>
				</div>
			</div>
		</Section>
	);
};
