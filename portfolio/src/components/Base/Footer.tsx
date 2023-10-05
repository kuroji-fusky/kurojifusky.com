export default function Footer() {
  return (
    <footer className="border-t border-kuro-lavender-200 p-6 flex justify-between items-center text-sm">
      <span className="opacity-50 text-kuro-lavender-100">
        {`© 2012-${new Date().getFullYear()} Kerby Keith Aquino / Fusky Labs, LLC. All rights reserved.`}
      </span>
      <div>
        {/* social prerendered social icons */}
        <span>Version 8</span>
      </div>
    </footer>
  )
}
