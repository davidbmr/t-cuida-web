import React from "react";
import style from "./Security.module.css";
import { Section } from "@/components/Section/Section";
import { CardSecurity } from "@/components/CardSecurity/CardSecurity";

import imgAsesora from "@/assets/home/te-asesora.png";
import imgAcompania from "@/assets/home/te-acompania.png";
import imgMonitorea from "@/assets/home/te-monitorea.png";

export const Security = () => {
	return (
		<Section customStyle={{ gap: "40px" }}>
			<h3 className={style.security__title}>La App que te mantiene segura</h3>

			<div className={style.cardSecurity__container__list}>
				<CardSecurity title="¡Te asesora!" img={imgAsesora} />
				<CardSecurity title="¡Te acompaña!" img={imgAcompania} />
				<CardSecurity title="¡Te monitorea!" img={imgMonitorea} />
			</div>
		</Section>
	);
};
