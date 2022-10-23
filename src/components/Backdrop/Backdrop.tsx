export default function Backdrop(props: { className: string }) {
	return (
		<div
			aria-hidden="true"
			className={`${props.className} z-1 blur-[45px] absolute rounded-full pointer-events-none`}
		></div>
	)
}
