interface IComponentButtonProps {
  children?: React.ReactNode
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  link?: string
  newTab?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

import styles from "@/styles/components/Button.module.scss"
import Link from "next/link"

export default function Button({
  children,
  disabled,
  className = "",
  style,
  link,
  newTab,
  onClick
}: IComponentButtonProps) {
  return (
    <>
      {link ? (
        <Link href={link}>
          <a
            className={`${className} ${
              disabled !== true
                ? styles.button.toString()
                : styles["button-disabled"].toString()
            }`}
            style={style}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        </Link>
      ) : (
        <button
          disabled={disabled ? true : false}
          className={`${
            disabled !== true
              ? styles.button.toString()
              : styles["button-disabled"].toString()
          } ${className}`}
          style={style}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  )
}
