export default function Seperator({
	clipPath = "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)"
}: {
	clipPath?: string
}) {
	return (
		<div
			className="layout-clip z-3 relative"
			style={
				{
					"--clip-path-layout": `${clipPath}`
				} as React.CSSProperties
			}
		></div>
	)
}
