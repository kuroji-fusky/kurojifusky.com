import { defineStore } from "pinia"

export const useModalStateStore = defineStore("modal", {
	state: (): { isModalOpen: boolean } => ({ isModalOpen: false }),
	actions: {
		toggleModal() {
			this.isModalOpen = !this.isModalOpen
		},
	},
})

export const useNavbarOpenStore = defineStore("navbarLol", {
	state: (): { isNavbarOpen: boolean } => ({ isNavbarOpen: false }),
	actions: {
		toggleNavbar() {
			this.isNavbarOpen = !this.isNavbarOpen
		},
	},
})
