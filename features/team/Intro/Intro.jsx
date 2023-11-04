import React from "react";
import style from "./Intro.module.css";
import { Section } from "@/components/Section/Section";
import Image from "next/image";
import arrow from "@/assets/home/icon-arrow.svg";

export const Intro = () => {
  return (
    <Section>
      <div className={style.content__box}>
        <p className={style.item__title}>Conoce a nuestro</p>
        <div className={style.item__team}>
          <div className={style.image__contain}>
            <Image
              className={style.item__image}
              src={arrow}
              alt="icono de flecha"
            />
          </div>
          <p className={style.team__text}>Team</p>
        </div>
        <p className={style.item__parrafo}>
          Somos un equipo decidido y motivado que brinda un soporte clave para
          acompañar y empoderar a todas las mujeres trabajadoras.
        </p>
      </div>
    </Section>
  );
};
