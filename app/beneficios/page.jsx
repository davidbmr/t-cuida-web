import React from "react";
import { SolutionsCover } from "@/features/beneficios/SolutionsCover/SolutionsCover";
import { Benefits } from "@/features/beneficios/Benefits/Benefits";
import { ExtraInformation } from "@/features/beneficios/ExtraInformation/ExtraInformation";

const page = () => {
	return (
		<>
			<SolutionsCover />
			<Benefits />
			<ExtraInformation />
		</>
	);
};

export default page;
