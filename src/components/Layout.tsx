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
			<main className="my-0 mx-auto max-w-screen-2xl px-5">{children}</main>
			<Footer />
		</>
	);
}
