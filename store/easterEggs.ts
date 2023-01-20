import { defineStore } from "pinia"

interface EasterEggStore {
	easterEggsFound: number
}

export const easterEggStore = defineStore("easterEggs", () => {
	state: (): EasterEggStore => {
		return {
			easterEggsFound: 0,
		}
	}
})
