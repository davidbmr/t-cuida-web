"use client";
import React, { useState } from "react";
import style from "./Testimonials.module.css";
import { Section } from "@/components/Section/Section";
import { TestimonialBox } from "@/components/TestimonialBox/TestimonialBox";
import { CarouselContainer } from "@/components/CarouselContainer/CarouselContainer";

export const Testimonials = () => {
	const [data, setData] = useState([
		{
			name: "Milagritos C.",
			rol: "Usuaria",
			description:
				"Es un GPS que la empresa me ha dado y lo presiono si me siento insegura. Con el dispositivo uno sale mas confiada",
		},
		{
			name: "Carmen A.",
			rol: "Usuaria",
			description:
				"Es un GPS que la empresa me ha dado y lo presiono si me siento insegura. Con el dispositivo uno sale mas confiada",
		},
		{
			name: "Andrea R.",
			rol: "Usuaria",
			description:
				"Es un GPS que la empresa me ha dado y lo presiono si me siento insegura. Con el dispositivo uno sale mas confiada",
		},
		{
			name: "Stefanie P.",
			rol: "Usuaria",
			description:
				"Es un GPS que la empresa me ha dado y lo presiono si me siento insegura. Con el dispositivo uno sale mas confiada",
		},
	]);

	return (
		<Section customStyle={{ gap: "40px" }}>
			<h3 className={style.testimonials__title}>Voces de mujeres empoderadas:</h3>

			<CarouselContainer>
				{data.length > 0 &&
					data.map((testimonial) => {
						return <TestimonialBox key={testimonial.name} {...testimonial} />;
					})}
			</CarouselContainer>
		</Section>
	);
};
