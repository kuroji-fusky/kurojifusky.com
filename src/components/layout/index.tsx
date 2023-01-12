import dynamic from "next/dynamic"

const Footer = dynamic(() => import("./Footer"))

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
