import React from "react";
import { CardListBlog } from "@/features/blog/CardListBlog/CardListBlog";
import { TitleBlog } from "@/features/blog/TitleBlog/TitleBlog";

const page = () => {
  return (
    <>
      <TitleBlog/>
      <CardListBlog />
    </>
  );
};

export default page;
