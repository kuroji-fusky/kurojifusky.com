import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}
