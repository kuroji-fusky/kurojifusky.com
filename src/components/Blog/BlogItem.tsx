import { LinkUnderline } from "@/components/UI"
import styles from "./BlogItem.module.scss"
import { BlogItemProps } from "./BlogTypes"

export function BlogItem(props: Partial<BlogItemProps>) {
  return (
    <div className={styles["item"]}>
      <h2>Dummy Content</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas nam
        eos minus nostrum? Necessitatibus quas, voluptatum dicta tempore placeat
        quidem sapiente!
      </p>
      <LinkUnderline link="#">Dummy link</LinkUnderline>
    </div>
  )
}
