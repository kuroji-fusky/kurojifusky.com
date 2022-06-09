import Header from "@/components/base/Header"

export default function DefaultLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<main role="main">{children}</main>
		</>
	)
}
