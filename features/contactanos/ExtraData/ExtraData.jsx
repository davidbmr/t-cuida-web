import React from "react";
import Image from "next/image";
import style from "./ExtraData.module.css";

import imgMail from "@/assets/contactanos/icon-mail.svg";
import imgPhone from "@/assets/contactanos/icon-phone.svg";
import imgLocation from "@/assets/contactanos/icon-location.svg";
import arrow from "@/assets/home/icon-arrow.svg";
import imgMaria from "@/assets/contactanos/maria-pose.png";

export const ExtraData = () => {
  return (
    <div className={style.extraData__container__principal}>
      <div className={style.img__maria__container}>
        <Image className={style.img__maria} src={imgMaria} alt="imagen maria" />
      </div>

      <div className={style.extraData__container}>
        <div className={style.arrow___box}>
          <div className={style.arrow__content}>
            <Image
              className={style.info__item__image}
              src={arrow}
              alt="icono de flecha"
            />
          </div>
        </div>

        <p className={style.text__extraData}>
          Si tienes una consulta o duda sobre nuestro servicio o deseas adquir
          nuestros beneficios, escribenos.
        </p>

        <div className={style.info__contain}>
          <div className={style.mail__contain}>
            <div className={style.img__content}>
              <Image className={style.mail__item} src={imgMail} alt="mail" />
            </div>
            <p className={style.text__item}>info@t-cuida.com</p>
          </div>
          <div className={style.phone__contain}>
            <div className={style.phone__content}>
              <Image className={style.img__phone} src={imgPhone} alt="phone" />
            </div>
            <p className={style.text__item}>(+51) 944 241 737</p>
          </div>
          <div className={style.location__contain}>
            <div className={style.location__content}>
              <Image
                className={style.img__location}
                src={imgLocation}
                alt="location"
              />
            </div>
            <p className={style.text__item}>
              El Derby 254, ofi. 1006, Lima Central Tower
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
