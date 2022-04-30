import Header from "./Header"
import Footer from "./Footer"

export default function MainLayout({ children }: any) {
  return (
    <>
      <Header />
      <main className="my-0 mx-auto max-w-screen-2xl px-5">{children}</main>
      <Footer />
    </>
  );
};
