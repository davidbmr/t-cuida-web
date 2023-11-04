import React from "react";
import Image from "next/image";
import style from "./Us.module.css";
import { ContentBox } from "@/components/ContentBox/ContentBox";
import imgMujer from "@/assets/home/img-us.png";
import { Button } from "@/components/Button/Button";
import { Section } from "@/components/Section/Section";

export const Us = () => {
	return (
		<Section>
			<ContentBox customClassName={style.us__contentBox}>
				<div className={style.us__text__container}>
					<p className={style.us__text}>
						T-Cuida nace <span>por ti y para ti</span>
					</p>
					<p className={style.us__subtext}>
						Un sistemas de cuidados organizaciones que acompaña a la mujer trabajoras en su proceso
						de empoderamiento.
					</p>
					<Button text="Ver mas" path="/" />
				</div>

				<div className={style.img__container}>
					<Image className={style.img} src={imgMujer} alt="imagen de una mujer" />
				</div>
			</ContentBox>
		</Section>
	);
};
