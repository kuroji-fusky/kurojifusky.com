import { NameLinkOnly } from "./Mutations"

export interface SharedBtnProps extends Partial<NameLinkOnly> {
  disabled?: boolean
  onClick?: () => any
}
