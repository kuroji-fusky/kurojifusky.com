import DefaultLayout from "@/layouts/Default";
import SEOHead from "@/components/SEOHead";

export default function FursonaGallery() {
  return (
		<>
			<SEOHead title="Fursona Gallery" description="Drawings of me lol" />
			<div className="w-full my-[4.5rem] grid place-items-center">
				<h2>Fursona Gallery</h2>
        <p>Cause why not lol</p>
			</div>
			<div className="layout-item-wrapper grid grid-cols-5 gap-4">
      {/*// TODO: Make a for loop that loops from the public/static folder */}
				<img className="rounded-xl" src="/static/avatars/01.jpg" alt="Yes" />
				<img className="rounded-xl" src="/static/avatars/02.png" alt="Yes" />
				<img className="rounded-xl" src="/static/avatars/03.png" alt="Yes" />
				<img className="rounded-xl" src="/static/avatars/04.png" alt="Yes" />
				<img className="rounded-xl" src="/static/avatars/05.png" alt="Yes" />
				<img className="rounded-xl" src="/static/avatars/06.png" alt="Yes" />
				<img className="rounded-xl" src="/static/avatars/07.png" alt="Yes" />
				<img className="rounded-xl" src="/static/avatars/08.png" alt="Yes" />
				<img className="rounded-xl" src="/static/avatars/08_2.png" alt="Yes" />
				<img className="rounded-xl" src="/static/avatars/09.png" alt="Yes" />
			</div>
		</>
	);
};

FursonaGallery.PageLayout = DefaultLayout