import { Poppins } from "next/font/google";
import "./main.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const metadata = {
	title: "T-cuida | Mujeres seguras",
	description: "T-cuida, mujeres seguras",
};

const poppins = Poppins({
	weight: ["400", "500", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={poppins.className} suppressHydrationWarning={true}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
