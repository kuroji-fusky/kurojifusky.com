import SEOHead from "@/components/SEOHead";
import styles from "@/styles/PageNotFound.module.scss";

export default function NotFoundPage() {
	return (
		<div>
			<SEOHead title="Page not found!" description="Page not found" />
			<div className="layout-item-wrapper" id={styles.wrapper}>
				<div className={styles["glitch-container"]}>
					<div className={styles["glitch-text"]}>404</div>
					<div className={styles["glitch-glow"]}>404</div>
				</div>
				<div id={styles["pnf-contents"]}>
					<span>
						Uh oh... looks like you landed on a typical haha 404 error, sorry,
						but the page you reqeested doesn't exist or was removed.
					</span>
				</div>
			</div>
		</div>
	);
}
