import clsx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...classNames: ClassValue[]) => twMerge(clsx(...classNames))
