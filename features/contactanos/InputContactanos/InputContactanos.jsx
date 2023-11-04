import React from "react";
import style from "./InputContactanos.module.css";

export const InputContactanos = ({
  type = "text",
  value,
  name,
  onChange,
  text,
}) => {
  return (
    <div className={style.input__contain}>
      <input
        className={style.input__item}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={text}
      />
    </div>
  );
};
