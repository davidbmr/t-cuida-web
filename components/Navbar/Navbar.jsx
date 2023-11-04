"use client";
import React, { useState } from "react";
import style from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import iconMenu from "@/assets/menu.png";
import iconCloseMenu from "@/assets/close-menu.png";
import { useRouter } from "next/navigation";

export const Navbar = () => {
	const [statusIcon, setStatusIcon] = useState(false);

	const router = useRouter();

	const onChangeStatusMenu = () => {
		setStatusIcon((prev) => !prev);
	};

	const onNavigateStatusMenu = (path) => {
		router.push(path);
		onChangeStatusMenu();
	};

	return (
		<>
			<nav className={style.navbar__container}>
				<ul className={style.navbar__list}>
					<li className={style.navbar__list__item}>
						<Link href="/">Inicio</Link>
					</li>
					<li className={style.navbar__list__item}>
						<Link href="/soluciones">Soluciones</Link>
					</li>
					<li className={style.navbar__list__item}>
						<Link href="/beneficios">Beneficios</Link>
					</li>
					<li className={style.navbar__list__item}>
						<Link href="/team">Team</Link>
					</li>
					<li className={style.navbar__list__item}>
						<Link href="/blog">Blog</Link>
					</li>
					<li className={style.navbar__list__item__contact}>
						<Link href="/contactanos">Conversemos</Link>
					</li>
				</ul>
			</nav>

			<div className={style.iconMenu}>
				{statusIcon ? (
					<>
						<Image src={iconCloseMenu} alt="icono de cerrar menu" onClick={onChangeStatusMenu} />
						<div className={style.menuMobile__container}>
							<nav className={style.navbarMobile__container}>
								<ul className={style.navbarMobile__list}>
									<li className={style.navbarMobile__list__item}>
										<div onClick={() => onNavigateStatusMenu("/")}>Inicio</div>
									</li>
									<hr className={style.navbarMobile__hr} />
									<li className={style.navbarMobile__list__item}>
										<div onClick={() => onNavigateStatusMenu("/soluciones")}>Soluciones</div>
									</li>
									<hr className={style.navbarMobile__hr} />
									<li className={style.navbarMobile__list__item}>
										<div onClick={() => onNavigateStatusMenu("/beneficios")}>Beneficios</div>
									</li>
									<hr className={style.navbarMobile__hr} />
									<li className={style.navbarMobile__list__item}>
										<div onClick={() => onNavigateStatusMenu("/team")}>Team</div>
									</li>
									<hr className={style.navbarMobile__hr} />
									<li className={style.navbarMobile__list__item}>
										<div onClick={() => onNavigateStatusMenu("/blog")}>Blog</div>
									</li>
									<hr className={style.navbarMobile__hr} />
									<li className={style.navbarMobile__list__item}>
										<div onClick={() => onNavigateStatusMenu("/contactanos")}>Conversemos</div>
									</li>
								</ul>
							</nav>
						</div>
					</>
				) : (
					<Image src={iconMenu} alt="icono de menu" onClick={onChangeStatusMenu} />
				)}
			</div>
		</>
	);
};
