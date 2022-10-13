import styles from "./ImgLoading.module.scss"

interface ImgLoadingProps {
  hidden?: boolean
}

export default function ImgLoading(props: ImgLoadingProps) {
  return <div className={styles[!props.hidden ? "loaded" : "loading"]}></div>
}
