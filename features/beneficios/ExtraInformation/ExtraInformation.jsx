import React from "react";
import style from "./ExtraInformation.module.css";
import { Section } from "@/components/Section/Section";
import Image from "next/image";

import arrowRight from "@/assets/solutions/icon-arrow-2.png";

export const ExtraInformation = () => {
	return (
		<Section
			customStyle={{ gap: "40px", marginTop: "100px" }}
			customClassName={style.section__extraInformation}
		>
			<h3 className={style.extraInfo__title}>Además tu empresa podrá:</h3>

			<Image src={arrowRight} alt="icono de flecha" className={style.arrowIcon} />

			<div className={style.card__list}>
				<div className={style.card__extraInfo}>
					<p className={style.card__extraInfo__text}>
						Personalizar el programa de protección de T-cuida para brindarlo como beneficio
						corporativo.
					</p>
				</div>
				<div className={style.card__extraInfo}>
					<p className={style.card__extraInfo__text}>
						Acceder a visualizar los reportes automatizados por el usuario.
					</p>
				</div>
				<div className={style.card__extraInfo}>
					<p className={style.card__extraInfo__text}>
						Acceder al App y a la plataforma web interna.
					</p>
				</div>
				<div className={style.card__extraInfo}>
					<p className={style.card__extraInfo__text}>Visualizar los perfiles de cada usuario.</p>
				</div>
				<div className={style.card__extraInfo}>
					<p className={style.card__extraInfo__text}>Reportes situacionales y diagnósticos.</p>
				</div>
				<div className={style.card__extraInfo}>
					<p className={style.card__extraInfo__text}>Visualizar el historial de las usuarios.</p>
				</div>
				<div className={style.card__extraInfo}>
					<p className={style.card__extraInfo__text}>Acceder a la data de usuarias.</p>
				</div>
				<div className={style.card__extraInfo}>
					<p className={style.card__extraInfo__text}>Enviar Push notification personalizadas.</p>
				</div>
			</div>
		</Section>
	);
};
