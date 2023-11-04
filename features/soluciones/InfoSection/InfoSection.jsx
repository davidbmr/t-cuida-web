import React from "react";
import Image from "next/image";
import { Section } from "@/components/Section/Section";
import iconArrow2 from "@/assets/solutions/icon-arrow-2.png";
import imgSoluciones1 from "@/assets/solutions/img-solution-1.png";
import imgSoluciones2 from "@/assets/solutions/img-solution-2.png";

import style from "./InfoSection.module.css";

export const InfoSection = () => {
	return (
		<Section customStyle={{ padding: "50px 0", gap: "40px" }}>
			<div className={style.info__container}>
				<div className={`${style.infoText__container} ${style.infoText__container__first}`}>
					<p className={style.infoText__title}>Cuidamos</p>
					<p className={style.infoText__description}>
						A las mujeres, promoviendo la seguridad y el empoderamiento psicológico, aumentando los
						comportamientos cívicos en la organización.
					</p>
				</div>
				<div
					className={`${style.infoText__icon__container} ${style.infoText__icon__container__first}`}
				>
					<Image
						className={style.infoText__icon}
						src={iconArrow2}
						alt="primera imagen de la seccion"
					/>
				</div>
				<div
					className={`${style.infoText__img__container} ${style.infoText__img__container__first}`}
				>
					<Image
						className={style.infoText__img}
						src={imgSoluciones1}
						alt="primera imagen de la seccion"
					/>
				</div>
			</div>

			<div className={style.info__container}>
				<div className={style.infoText__container}>
					<p className={style.infoText__title}>Prevenimos</p>
					<p className={style.infoText__description}>
						La violencia basada en género y sus consecuencias negativas en la organización.
					</p>
				</div>
				<div className={style.infoText__icon__container}>
					<Image
						className={style.infoText__icon}
						src={iconArrow2}
						alt="primera imagen de la seccion"
					/>
				</div>
				<div className={style.infoText__img__container}>
					<Image
						className={style.infoText__img}
						src={imgSoluciones2}
						alt="primera imagen de la seccion"
					/>
				</div>
			</div>
		</Section>
	);
};
