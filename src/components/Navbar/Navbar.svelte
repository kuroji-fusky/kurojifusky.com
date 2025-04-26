<script lang="ts">
  import LogoBrand from "~icons/kuro/logo-brand?raw";
  import SearchIcon from "~icons/lucide/search?raw";
  import MenuIcon from "~icons/lucide/menu?raw";
  import { onMount, type Snippet } from "svelte";
  import Portal from "$components/shared/Portal.svelte";

  interface Props {
    crumbs?: Snippet;
    activeRoute: string;
  }

  const { crumbs, activeRoute }: Props = $props();

  const navLinks = [
    { href: "/portfolio", text: "Portfolio", contents: [] },
    { href: "/blog", text: "Blog", contents: [] },
    { href: "/about", text: "About", contents: [] },
  ];

  let menuState = $state(false);

  const toggleMobileMenu = () => (menuState = !menuState);

  onMount(() => {
    const navbarController = new AbortController();
    const { signal } = navbarController;

    window.addEventListener(
      "keydown",
      (e) => {
        if (menuState && e.key === "Escape") {
          menuState = false;
        }
      },
      { signal },
    );

    return () => {
      navbarController.abort();
    };
  });
</script>

<a
  href="#skip-to-content"
  class="fixed top-2 left-2 pointer-events-none focus:pointer-events-auto focus:opacity-100 focus:translate-x-0 translate-x-full opacity-0 bg-kuro-lavender-700 z-50 px-4 py-2.5 rounded-md"
  data-astro-prefetch="false">Skip to content?</a
>
<div class="z-20 sticky top-0 bg-kuro-dark2">
  <nav
    class="py-1.5 flex items-center justify-between px-6 max-w-screen-xl 2xl:max-w-screen-2xl mx-auto"
  >
    <a
      href="/"
      title="Home page"
      class="py-2 pr-1 flex-shrink-0 [&_svg]:!h-[1.33rem]"
    >
      {@html LogoBrand}
    </a>

    <div class="grow pl-1.5">
      {@render crumbs?.()}
    </div>

    <div
      id="global-nav"
      class="
      flex

      md:relative md:bg-transparent md:flex-row md:top-0 md:items-center

      absolute flex-col top-14 items-start

      w-max justify-end my-auto gap-x-1 font-kuro-mono text-sm
      "
    >
      {#each navLinks as { href, text }}
        <a
          {href}
          class={[
            "px-3 py-1.5",
            activeRoute.startsWith(href) ? "text-kuro-lavender-200" : null,
          ]}
          aria-current={activeRoute.startsWith(href) ? "page" : null}
        >
          {text}
        </a>
        <div data-content-expandable=""></div>
      {/each}
    </div>
    <div
      class="md:contents flex items-center gap-x-0.5 *:cursor-pointer *:px-3 *:py-2"
    >
      <button>
        {@html SearchIcon}
      </button>
      <button class="md:hidden block" onclick={toggleMobileMenu}>
        {@html MenuIcon}
      </button>
    </div>
  </nav>
</div>
<Portal target="body">
  <div
    data-kuro-backdrop-container=""
    class={[
      "fixed inset-0 transition-all",
      menuState ? "bg-black/60 backdrop-blur-sm" : "pointer-events-none",
    ]}
  ></div>
</Portal>
