import SEOHead from "@/components/partials/SEOHead"
import DefaultLayout from "@/layouts/Default"

export default function AboutPage() {
	return (
		<div>
			<SEOHead title="About Me" description="ME HE HEEEEEE" />
			<h2>About me</h2>
			<p>I'm stupid lol</p>
			<hr />
		</div>
	)
}

AboutPage.PageLayout = DefaultLayout
