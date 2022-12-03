interface BlogSectionProps extends ChildrenOnly {
  title?: string
}

export function BlogSection(props: BlogSectionProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}
