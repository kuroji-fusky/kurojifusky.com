import Header from "@/components/base/Header"

export default function DefaultLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	)
}
