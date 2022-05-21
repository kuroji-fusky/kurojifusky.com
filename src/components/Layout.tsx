import Header from "./Header";
import Footer from "./Footer";
import React from "react";

interface ILayoutProps {
	children: React.ReactNode;
}

export default function MainLayout({ children }: ILayoutProps) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
