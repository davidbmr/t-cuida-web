import React from "react";
import style from "./CardBlog.module.css"
import Image from "next/image";

import { Section } from "../Section/Section";
import { ArrowButton } from "../ArrowButton/ArrowButton";

export const CardBlog = ({ title, img }) => {
  return (
    <Section>
      <div className={style.cardBlog__container}>
        <div className={style.img__contain}>
          <Image
            className={style.img__item}
            src={img}
            alt="imagen de un blog"
          />
        </div>
        <div className={style.info__contain}>
          <p className={style.title__info}>{title}</p>
          <ArrowButton />
        </div>
      </div>
    </Section>
  );
};
