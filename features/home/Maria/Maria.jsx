import React from "react";
import style from "./Maria.module.css";
import Image from "next/image";
import { ContentBox } from "@/components/ContentBox/ContentBox";
import { Section } from "@/components/Section/Section";

import mariaPose1 from "@/assets/maria-pose1.png";
import iconArrow2 from "@/assets/solutions/icon-arrow-2.png";

export const Maria = () => {
	return (
		<Section>
			<ContentBox customClassName={style.maria__content}>
				<div className={style.text__container}>
					<p className={style.text}>
						<span className={style.text__especial}>¡Conoce </span>a tu cuidadora
						<span className={style.text__especial}> María!</span>
					</p>
					<div className={style.infoText__icon__container}>
						<Image className={style.infoText__icon} src={iconArrow2} alt="icono de flecha" />
					</div>
					<p className={style.subtext}>
						<span>
							Nuestra <span className={style.color__primary}>asistente virtual</span> María
						</span>{" "}
						te acompañará durante tu proceso de integración y cuidado.
					</p>
				</div>

				<div className={style.img__container}>
					<Image className={style.img} src={mariaPose1} alt="imagen de maria" />
				</div>
			</ContentBox>
		</Section>
	);
};
