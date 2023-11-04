import React from "react";
import style from "./Contactanos.module.css";
import { ExtraData } from "@/features/contactanos/ExtraData/ExtraData";
import { Formulario } from "@/features/contactanos/Formulario/Formulario";
import { Section } from "@/components/Section/Section";

const page = () => {
	return (
		<Section customStyle={{ margin: "40px 0" }} customClassName={style.contactanos__container}>
			<div className={style.contact__content}>
				<div className={style.extraData__content}>
					<ExtraData />
				</div>
				<Formulario />
			</div>
		</Section>
	);
};

export default page;
