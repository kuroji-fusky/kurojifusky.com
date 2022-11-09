import ReactMarkdown from "react-markdown"

interface SkillItemProps {
  title: string
  description: string
  animStagger?: number
}

export default function SkillItem(props: SkillItemProps) {
  return (
    <div
      className="p-7 relative rounded-lg flex flex-col gap-2 bg-borahae-dark m-0.5 w-full shadow-2xl shadow-sona-royalblue-900
			before:content-[''] before:absolute before:-inset-[0.1rem] before:-z-1
			before:bg-gradient-to-tl before:from-sona-borahae-500 before:to-sona-skycyan-700 before:rounded-lg"
    >
      <strong className="text-xl font-inter">{props.title}</strong>
      <ReactMarkdown>{props.description}</ReactMarkdown>
    </div>
  )
}
