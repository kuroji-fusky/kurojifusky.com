import { defineStore } from "pinia"

export const useModalStateStore = defineStore("modal", {
	state: (): { isModalOpen: boolean } => ({ isModalOpen: false }),
	actions: {
		toggleModal() {
			this.isModalOpen = !this.isModalOpen
		},
	},
})
