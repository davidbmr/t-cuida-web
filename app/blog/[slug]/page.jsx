import React from 'react'
import style from "./articulo.module.css";
import Image from "next/image";
import img1 from "@/assets/blog/articulo/mujeres-1.png";

const page = () => {
  return (
    <div className={style.articulo__container}>
      <div className={style.text__contain}>
        <h2 className={style.title__item}>Mujeres que cuidan y empoderan</h2>
        <p className={style.text__item}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
      </div>

      <div className={style.image__content}>
        <Image
        className={style.info__item__image}
        src={img1}
        alt="imagen de mujeres"/>
      </div>
    </div>
  )
}

export default page