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
				<div className="text-center">
					Uh oh... looks like you landed on a typical haha 404 page, but sorry,
					but the page you requested doesn't exist or was removed.
				</div>
			</div>
		</div>
	);
}
