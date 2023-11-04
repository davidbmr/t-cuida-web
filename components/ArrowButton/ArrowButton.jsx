import React from 'react'
import Image from 'next/image'
import style from './ArrowButton.module.css'
import arrow from "@/assets/home/icon-arrow.svg";

export const ArrowButton = () => {
  return (
    <Image className={style.info__item__image} src={arrow} alt="icono de flecha" />
  )
}
