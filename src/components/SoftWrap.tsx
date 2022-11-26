export default function SoftWrap({ children }: ChildrenOnly) {
  return (
    <div
      id="soft-wrap-container"
      className="relative z-1 max-w-screen-2xl mx-auto px-7"
    >
      {children}
    </div>
  )
}
