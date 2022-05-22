interface Ass {
	title: string;
	dateString: string;
  author: string;
}

export default function ProjectHeader({ title, dateString, author }: Ass) {
  return(
    <div>
      <span>{title}</span>
      <span>{dateString}</span>
      <span>{author}</span>
    </div>
  )
}
