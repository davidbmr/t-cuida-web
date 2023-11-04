import React from "react";
import style from "./Description.module.css";
import { Section } from "@/components/Section/Section";

export const Description = () => {
	return (
		<Section>
			<p className={style.description__text}>
				“Quien te quiera <span>ver con miedo,</span>
				<br />
				que tenga miedo <span>de tu </span>
				<span className={style.description__text__especial}>valentía”</span>
			</p>
		</Section>
	);
};
