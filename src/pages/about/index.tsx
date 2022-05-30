import SEOHead from "@/components/SEOHead";
import UnderConstruction from "@/components/UnderConstruction";
import DefaultLayout from "@/layouts/Default";

export default function AboutPage() {
  return (
		<div>
			<SEOHead title="About Me" description="ME HE HEEEEEE" />
			<UnderConstruction />
			<h2>About me</h2>
			<p>I'm stupid lol</p>
			<hr />
		</div>
	);
};

AboutPage.PageLayout = DefaultLayout;