import React from "react";
import style from "./Impact.module.css";
import Image from "next/image";
import { Section } from "@/components/Section/Section";
import { ContentBox } from "@/components/ContentBox/ContentBox";
import { Button } from "@/components/Button/Button";

import iconoMano from "@/assets/solutions/icono-mano.png";
import iconoPrecioAlto from "@/assets/solutions/icono-precio-alto.png";
import iconoPrecioBajo from "@/assets/solutions/icono-precio-bajo.png";

import imgMariaPose3 from "@/assets/solutions/img-maria-pose-3.png";

export const Impact = () => {
	return (
		<Section customStyle={{ gap: "40px" }}>
			<h3 className={style.impact__title}>
				<span>¿Cómo impactamos en</span>
				<br /> las organizaciones?
			</h3>

			<ContentBox customClassName={style.box__container}>
				<div className={style.imagen__maria__box}>
					<Image className={style.imagen__maria} src={imgMariaPose3} alt="imagen de maria" />
				</div>

				<div className={style.impact__info__list}>
					<div className={style.impact__info__item}>
						<Image src={iconoPrecioAlto} alt="icono de alta productividad" />
						<p className={style.impact__info__text}>
							<span>Elevamos</span> la productividad laboral.
						</p>
					</div>

					<div className={style.impact__info__item}>
						<Image src={iconoMano} alt="icono de mano" />
						<p className={style.impact__info__text}>
							<span>Generamos bienestar social </span>
							dentro de la organización.
						</p>
					</div>

					<div className={style.impact__info__item}>
						<Image src={iconoPrecioBajo} alt="icono de bajo costo" />
						<p className={style.impact__info__text}>
							<span>Reducimos costos </span>
							de contratación al disminuir los niveles de rotación.
						</p>
					</div>
					<Button text="Contáctanos" path="/contactanos" />
				</div>
			</ContentBox>
		</Section>
	);
};
