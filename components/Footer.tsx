
export default function Header() {
  return (
    <header>
      <div className="my-0 mx-auto max-w-screen-2xl p-5">
        &copy; {new Date().getFullYear()} skepfusky, all rights reserved.
      </div>
    </header>
  );
}
