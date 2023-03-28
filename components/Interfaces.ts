import type { Icon as LucideIcon } from "lucide-vue-next"

interface ImgGrid {
	subtitle?: string
	img?: string
}

type ProjectTypes =
	| "Extension"
	| "Website"
	| "Library"
	| "Film"
	| "Discography"
	| "Others"

export interface ShowcaseItem {
	name: string
	description: string
	projectType?: ProjectTypes
	wip?: boolean
	year?: "21" | "22" | "23"
	imgGrids: Partial<[ImgGrid, ImgGrid, ImgGrid]>
	callToAction?: {
		icon?: LucideIcon
		link: string
	}
}

interface FixedMedia {
	xl?: number
	lg?: number
	md?: string
}

interface PaddingResponsive {
	px?: FixedMedia
	py?: FixedMedia
	pt?: FixedMedia
	pr?: FixedMedia
	pl?: FixedMedia
	pb?: FixedMedia
}
interface MarginResponsive {
	mx?: FixedMedia
	my?: FixedMedia
	mt?: FixedMedia
	mr?: FixedMedia
	ml?: FixedMedia
	mb?: FixedMedia
}

export interface GapResponsive {
	gap?: FixedMedia
	"gap-x"?: FixedMedia
	"gap-y"?: FixedMedia
}

export interface SizeResponsive {
	w?: FixedMedia
	h?: FixedMedia
	size?: FixedMedia
}

interface TextProses {
  proseH1?: boolean
  proseH2?: boolean
  proseH3?: boolean
  proseP?: boolean
  proseSubP?: boolean
}

// prettier-ignore
export interface BiroLayoutStyles extends PaddingResponsive, MarginResponsive, GapResponsive, SizeResponsive {}
// prettier-ignore
export interface BiroTextStyles extends PaddingResponsive, MarginResponsive {}
// prettier-ignore
export interface BiroArticleStyles extends PaddingResponsive, MarginResponsive, GapResponsive {}
