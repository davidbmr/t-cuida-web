import React from "react";
import style from "./Header.module.css";
import Image from "next/image";
import logo from "@/assets/logo-tcuida.svg";
import { Navbar } from "../Navbar/Navbar";
import Link from "next/link";

export const Header = () => {
	return (
		<header className={style.header__container}>
			<div className={style.header__content}>
				<Link href="/">
					<div className={style.logo__container}>
						<Image src={logo} alt="Logo de t-cuida" priority />
					</div>
				</Link>
				<Navbar />
			</div>
		</header>
	);
};
