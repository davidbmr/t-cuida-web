import React from "react";
import style from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-tcuida.svg";
import facebook from "@/assets/footer/Facebook.svg";
import instagram from "@/assets/footer/Instagram.svg";
import linkedin from "@/assets/footer/Linkedin.svg";
import twitter from "@/assets/footer/Twitter.svg";

export const Footer = () => {
	return (
		<div className={style.footer__container}>
			<div className={style.section__icons}>
				<div className={style.logo__container}>
					<Image className={style.logo__image} src={logo} alt="logo" />
				</div>

				<div className={style.icons__container}>
					<a href="https://www.instagram.com/tcuidaapp/" target="_blank" rel="noopener noreferrer">
						<Image className={style.info__item__image} src={instagram} alt="logo de instagram" />
					</a>
					<a href="#" target="_blank" rel="noopener noreferrer">
						<Image className={style.info__item__image} src={twitter} alt="logo de twitter" />
					</a>
					<a href="https://www.facebook.com/tcuidaapp" target="_blank" rel="noopener noreferrer">
						<Image className={style.info__item__image} src={facebook} alt="logo de facebook" />
					</a>
					<a
						href="https://www.linkedin.com/company/tcuidaapp/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image className={style.info__item__image} src={linkedin} alt="logo de linkedin" />
					</a>
				</div>
			</div>

			<div className={style.tcuida__container}>
				<h3 className={style.title__item}>
					<Link href="/">T.Cuida</Link>
				</h3>
				<div className={style.option__content}>
					<p className={style.p__item}>
						<Link href="/team">Nosotros</Link>
					</p>
					<p className={style.p__item}>
						<Link href="/">Cómo funciona</Link>
					</p>
					<p className={style.p__item}>
						<Link href="/">Cuidadora</Link>
					</p>
					<p className={style.p__item}>
						<Link href="/team">Team</Link>
					</p>
				</div>
			</div>

			<div className={style.tcuida__container}>
				<h3 className={style.title__item}>
					<Link href="/soluciones">Soluciones</Link>
				</h3>
				<div className={style.option__content}>
					<p className={style.p__item}>
						<Link href="/">Nuestra App</Link>
					</p>
					{/* <p className={style.p__item}><Link href="/">Impacto</Link></p> */}
					<p className={style.p__item}>
						<Link href="/beneficios">Beneficios</Link>
					</p>
					<p className={style.p__item}>
						<Link href="/">Testimonios</Link>
					</p>
				</div>
			</div>
			<div className={style.tcuida__container}>
				<h3 className={style.title__item}>
					<Link href="/contactanos">Contacto</Link>
				</h3>
				<div className={style.option__content}>
					<p className={style.p__item}>
						<Link href="/contactanos">Conversemos</Link>
					</p>
					<p className={style.p__item}>
						<Link href="/">Whatsapp</Link>
					</p>
					{/* <p className={style.p__item}><Link href="/">Soporte</Link></p> */}
					<p className={style.p__item}>
						<Link href="/">Términos y condiciones</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
