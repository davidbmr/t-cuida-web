import React from "react";
import style from "./Cover.module.css";
import Image from "next/image";

import appMobil from "@/assets/home/app-tcuida.png";
import arrow from "@/assets/home/icon-arrow.svg";

export const Cover = () => {
	return (
		<div className={style.cover__container}>
			<p className={style.background__text}>App</p>

			<div className={style.img__container}>
				<Image className={style.img__app} src={appMobil} alt="Imagen del app de tcuida" />
			</div>

			<div className={style.info__container}>
				<div className={style.info__item__1}>
					<p className={style.info__item__text}>Mujeres</p>
					<Image className={style.info__item__image} src={arrow} alt="icono de flecha" />
				</div>

				<div className={style.info__item__2}>
					<div className={style.info__item__2_mod}>
						<p className={style.info__item__subtext}>más</p>
						<p className={style.info__item__text}>seguras</p>
					</div>
				</div>
			</div>
		</div>
	);
};
