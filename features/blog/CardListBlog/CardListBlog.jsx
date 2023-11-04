import React from "react";
import style from "./CardListBlog.module.css"
import { CardBlog } from "@/components/CardBlog/CardBlog";
import img1 from "@/assets/blog/blog-imagen1.png";
import img2 from "@/assets/blog/blog-imagen2.png";
import img3 from "@/assets/blog/blog-imagen3.png";
import img4 from "@/assets/blog/i4.jpg";

export const CardListBlog = () => {
  return (
    <div className={style.cardListBlog__container}>
      <CardBlog title={"Mujeres que cuidan y empoderan"} img={img1} />
      <CardBlog title={"Mujeres que cuidan y empoderan"} img={img2} />
      <CardBlog title={"Mujeres que cuidan y empoderan"} img={img3} />
      <CardBlog title={"Mujeres que cuidan y empoderan"} img={img4} />
    </div>
  );
};
