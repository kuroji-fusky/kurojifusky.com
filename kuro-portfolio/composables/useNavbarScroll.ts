export function useNavbarScroll() {
	const isScrolled = ref(false)

	function handleNavScroll() {
		isScrolled.value = window.scrollY < 21 ? false : true
	}

	onBeforeMount(() => window.addEventListener("scroll", handleNavScroll))
	onMounted(() => window.addEventListener("scroll", handleNavScroll))
	onUnmounted(() => window.removeEventListener("scroll", handleNavScroll))

	return { isScrolled }
}
