import dynamic from "next/dynamic"
import Navbar from "./Navbar"
const Footer = dynamic(() => import("./Footer"))

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
