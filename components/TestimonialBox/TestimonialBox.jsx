import React from "react";
import style from "./TestimonialBox.module.css";

export const TestimonialBox = (props) => {
	return (
		<div className={style.testimonialBox__container}>
			<div className={style.testimonialBox__header}>
				<div>
					<p className={style.testimonialBox__name}>{props.name}</p>
					<p className={style.testimonialBox__rol}>{props.rol}</p>
				</div>

				<div
					style={{ background: "gray", width: "40px", height: "40px", borderRadius: "40px" }}
				></div>
			</div>

			<div className={style.testimonialBox__body}>
				<p className={style.testimonialBox__text}>{props.description}</p>
			</div>
		</div>
	);
};

const data = {
	name: "Milagritos C.",
	rol: "Usuaria",
	description:
		"Es un GPS que la empresa me ha dado y lo presiono si me siento insegura. Con el dispositivo uno sale mas confiada",
};
