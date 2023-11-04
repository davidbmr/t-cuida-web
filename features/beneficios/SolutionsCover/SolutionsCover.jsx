import React from "react";
import style from "./SolutionsCover.module.css";
import Image from "next/image";

import { Section } from "@/components/Section/Section";
import appMobil from "@/assets/solutions/mockup-tcuida-soluciones.png";
import arrow from "@/assets/home/icon-arrow.svg";

import iconoPrecioAlto from "@/assets/solutions/icono-precio-alto-blanco.png";
import iconoPrecioBajo from "@/assets/solutions/icono-precio-bajo-blanco.png";

export const SolutionsCover = () => {
	return (
		<Section customStyle={{ padding: "50px 0" }} customClassName={style.cover__container}>
			<div className={style.img__container}>
				<Image className={style.img__app} src={appMobil} alt="Imagen del app de tcuida" />
			</div>

			<div className={style.info__container}>
				<div className={style.info__item__1}>
					<div className={style.info__item__title__container}>
						<Image className={style.info__item__img} src={iconoPrecioAlto} alt="icono mayor" />
						<p className={style.info__item__title}>Mayor</p>
					</div>
					<p className={style.info__item__subtitle}>Productividad</p>
					<div style={{ lineHeight: "20px" }}>
						<p className={style.info__item__description}>
							Incrementando la seguridad y el empoderamiento psicológico.
						</p>
					</div>
				</div>

				<div className={style.info__item__2}>
					<div className={style.info__item__title__container}>
						<Image className={style.info__item__img__2} src={iconoPrecioBajo} alt="icono mayor" />
						<p className={style.info__item__title}>Menos</p>
					</div>
					<p className={style.info__item__subtitle}>Costos</p>
					<div style={{ lineHeight: "20px" }}>
						<p className={style.info__item__description}>
							Incrementando la seguridad y el empoderamiento psicológico.
						</p>
					</div>
				</div>
			</div>
		</Section>
	);
};
