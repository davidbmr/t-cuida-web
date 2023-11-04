import React from "react";

import { Cover } from "@/features/home/Cover/Cover";
import { Description } from "@/features/home/Description/Description";
import { Us } from "@/features/home/Us/Us";
import { Maria } from "@/features/home/Maria/Maria";
import { Security } from "@/features/home/Security/Security";
import { Statistics } from "@/features/home/Statistics/Statistics";
import { Testimonials } from "@/features/home/Testimonials/Testimonials";

const page = () => {
	return (
		<>
			<Cover />
			<Description />
			<Us />
			<Maria />
			<Security />
			<Statistics />
			<Testimonials />
		</>
	);
};

export default page;
