interface Ass {
	title: string;
	dateString: string;
  author: string;
  backdropImg?: string;
  img?: string;
}

export default function ProjectHeader({ title, dateString, author, img, backdropImg }: Ass) {
  return(
    <div id="project-header">
      <div>
        <img src={backdropImg} alt={`Image for ${title}`} />
      </div>
      <span>{title}</span>
      <span>{dateString}</span>
      <span>{author}</span>
    </div>
  )
}
