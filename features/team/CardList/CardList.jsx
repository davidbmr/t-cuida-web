import React from "react";
import style from "./CardList.module.css";

import { CardTeam } from "@/components/CardTeam/CardTeam";

import imgKaren from "@/assets/team/karen.png";
import imgValeria from "@/assets/team/valeria.png";
import imgElam from "@/assets/team/elam.png";

export const CardList = () => {
	return (
		<div className={style.cardList__container}>
			<div className={style.cardList__content}>
				<CardTeam
					name="Karen del Castillo"
					position="CEO - Chief Executive Officer"
					img={imgKaren}
				/>
				<CardTeam name="Valeria Duffo" position="COO - Chief Operating Officer" img={imgValeria} />
				<CardTeam
					name="Elam Jiménez C."
					position="CCO - Chief Communications Officer"
					img={imgElam}
				/>
			</div>
		</div>
	);
};
