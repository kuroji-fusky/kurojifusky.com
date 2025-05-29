<script lang="ts">
  import LogoBrand from "~icons/kuro/logo-brand?raw";
  import SearchIcon from "~icons/lucide/search?raw";
  import MenuIcon from "~icons/lucide/menu?raw";
  import ChevronDownIcon from "~icons/lucide/chevron-down?raw";
  import { navLinks } from "./NavbarItems";
  import { onMount } from "svelte";

  import { gsap } from "gsap";

  interface Props {
    activeRoute: string;
  }

  const { activeRoute }: Props = $props();

  let menuState = $state(false);

  onMount(() => {});
</script>

<div class="z-20 fixed inset-x-0 top-0 bg-kuro-dark2/80 backdrop-blur-md">
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

    <div
      class="flex lg:relative lg:bg-transparent lg:flex-row lg:top-0 lg:items-center absolute flex-col top-14 items-start w-max justify-end my-auto gap-x-1 font-kuro-mono text-sm"
    >
      {#each navLinks as { href, text }}
        <a
          {href}
          class={[
            "relative before:absolute before:inset-0 before:transition-all before:duration-[250ms] before:pointer-events-none before:rounded-sm hover:before:bg-kuro-lavender-100/20 before:scale-[0.96] hover:before:scale-100",
            "px-3 py-1.5",
            activeRoute.startsWith(href) ? "text-kuro-lavender-200" : null,
          ]}
          aria-current={activeRoute.startsWith(href) ? "page" : null}
        >
          {text}
        </a>
      {/each}
      <span class="hidden lg:inline-block h-5 border-l opacity-40 mx-2"></span>
      <button
        class="cursor-pointer hidden lg:block px-2 py-1 flex-shrink-0 [&_svg]:!h-[1.5rem] relative before:duration-[250ms] before:pointer-events-none before:absolute before:-z-10 before:rounded-sm before:size-full before:inset-0 before:transition-all hover:before:bg-kuro-lavender-200/20 before:scale-[0.96] hover:before:scale-100"
      >
        {@html ChevronDownIcon}
      </button>
    </div>
    <div
      class="lg:contents flex items-center gap-x-0.5 *:cursor-pointer *:px-3 *:py-2"
    >
      <button>
        {@html SearchIcon}
      </button>
      <button class="lg:hidden block">
        {@html MenuIcon}
      </button>
    </div>
  </nav>
</div>
<!-- <Portal target="body">
  <div
    data-kuro-backdrop-container=""
    class={[
      "fixed inset-0 transition-all",
      menuState ? "bg-black/60 backdrop-blur-sm" : "pointer-events-none",
    ]}
  ></div>
</Portal> -->
