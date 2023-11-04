import React from "react";
import style from "./Formulario.module.css";
import Image from "next/image";

import { InputContactanos } from "../InputContactanos/InputContactanos";

import imgMaria from "@/assets/contactanos/maria-like-pose.png";
import imgMail from "@/assets/contactanos/icon-mail.svg";
import imgPhone from "@/assets/contactanos/icon-phone.svg";
import imgLocation from "@/assets/contactanos/icon-location.svg";

export const Formulario = () => {
  return (
    <div className={style.content__box}>
      <div className={style.maria__container}>
        <Image className={style.img__maria} src={imgMaria} alt="mail" />
      </div>
      <div className={style.formulario__container}>
        <div className={style.title__contain}>
          <h3 className={style.title__item}>Conversemos</h3>
          <p className={style.p__item}>
            Si tienes una consulta o duda sobre nuestro servicio o deseas adquir
            nuestros beneficios, escribenos.
          </p>
        </div>
        <form className={style.form__contain}>
          <InputContactanos text="Nombre Completo" />
          <InputContactanos text="Correo Electrónico" />
          <textarea
            className={style.textarea__item}
            placeholder="Escríbenos un mensaje..."
          />
          <div className={style.check__contain}>
            <input className={style.chek__item} type="checkbox" />
            <label className={style.info__primary}>
              He leído y acepto las{" "}
              <span className={style.info__second}>
                políticas de privacidad{" "}
              </span>
              y condiciones de uso.
            </label>
          </div>
          <button className={style.button__contain}>Enviar</button>
        </form>
        <div className={style.info__contain}>
          <div className={style.two__column}>
            <div className={style.mail__contain}>
              <div className={style.img__content}>
                <Image className={style.mail__item} src={imgMail} alt="mail" />
              </div>
              <p className={style.text__item}>info@t-cuida.com</p>
            </div>
            <div className={style.phone__contain}>
              <div className={style.phone__content}>
                <Image
                  className={style.img__phone}
                  src={imgPhone}
                  alt="phone"
                />
              </div>
              <p className={style.text__item}>(+51) 944 241 737</p>
            </div>
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
