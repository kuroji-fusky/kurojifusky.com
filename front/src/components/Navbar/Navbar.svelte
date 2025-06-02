<script lang="ts">
  import LogoBrand from "~icons/kuro/logo-brand?raw";
  import SearchIcon from "~icons/lucide/search?raw";
  import MenuIcon from "~icons/lucide/menu?raw";
  import CloseIcon from "~icons/lucide/x?raw";
  import ChevronDownIcon from "~icons/lucide/chevron-down?raw";
  import { onMount } from "svelte";

  import { gsap } from "gsap";

  interface Props {
    activeRoute: string;
    inlineNavItems: object;
  }

  const { activeRoute, inlineNavItems }: Props = $props();

  let isOpen = $state(false);

  let navRootScope: HTMLDivElement;

  let navContainer: HTMLDivElement;
  let navButton: HTMLButtonElement;
  let navClose: HTMLButtonElement;

  let navLinksCurtain: HTMLElement;

  onMount(() => {
    const gsapCtx = gsap.context(() => {
      const navAnimTree = gsap.timeline().reversed(true);
      navAnimTree.to(navContainer, {
        y: 6,
        opacity: 0,
        filter: "blur(2px)",
        ease: "power2.inOut",
        pointerEvents: "none",
        duration: 0.33,
      });

      navAnimTree.fromTo(
        navLinksCurtain,
        {
          height: "0%",
          pointerEvents: "none",
          display: "none",
        },
        {
          height: "100%",
          pointerEvents: "auto",
          ease: "expo.inOut",
          duration: 0.48,
          display: "block",
        },
        "-=0.35",
      );

      // descendant to navLinksCurtainEl
      navAnimTree.fromTo(
        navLinksCurtain.querySelector("& > div"),
        {
          y: -33,
          pointerEvents: "none",
          filter: "blur(2px)",
          opacity: 0.15,
        },
        {
          y: 0,
          pointerEvents: "auto",
          filter: "blur(0px)",
          opacity: 1,
          ease: "expo.inOut",
          duration: 0.75,
        },
        "-=0.65",
      );

      // Event listeners; desktop navigation
      const _h = document.documentElement;

      const handleCloseMenu = () => {
        if (!isOpen) return;
        navAnimTree.reverse();
        _h.classList.remove("overflow-y-hidden");

        isOpen = false;
        return;
      };

      const handleEscKey = ({ key }: KeyboardEvent) => {
        if (key === "Escape" && isOpen) {
          handleCloseMenu();

          // Remove keyboard listener anymore if the bitch is closed
          window.removeEventListener("keydown", handleEscKey);
          return;
        }
      };

      // Opening menu
      navButton.addEventListener("click", () => {
        if (isOpen && !navAnimTree.reversed()) return;

        // Listen for ESC key presses
        window.addEventListener("keydown", handleEscKey);

        navAnimTree.play();
        _h.classList.add("overflow-y-hidden");
        isOpen = true;
      });

      // Closing menu
      navClose.addEventListener("click", handleCloseMenu);
    }, navRootScope);

    return () => gsapCtx.revert();
  });
</script>

<!--
I'm too lazy to wrap this into separate components
I'm aware the code or this is a mess, leave me alone

this my code not urs fuk u
-->
<div bind:this={navRootScope} class="contents">
  <div class="z-50 fixed inset-x-0 top-0 bg-kuro-dark2/80 backdrop-blur-md">
    <nav
      class="py-1.5 flex items-center justify-between px-6 max-w-screen-xl mx-auto"
    >
      <a
        href="/"
        title="Home page"
        class="py-2 pr-1 flex-shrink-0 [&_svg]:!h-[1.33rem]"
      >
        {@html LogoBrand}
      </a>

      <div
        bind:this={navContainer}
        class="flex lg:relative lg:bg-transparent lg:flex-row lg:top-0 lg:items-center absolute flex-col top-14 items-start w-max justify-end my-auto gap-x-1 font-kuro-mono text-sm"
      >
        {#each inlineNavItems as { href, text }}
          <a
            {href}
            class={[
              "squishy-button",
              "px-3 py-1.5",
              activeRoute.startsWith(href) ? "text-kuro-lavender-200" : null,
            ]}
            aria-current={activeRoute.startsWith(href) ? "page" : null}
          >
            {text}
          </a>
        {/each}
        <div class="absolute flex items-center -right-[3.25rem]">
          <span class="hidden lg:inline-block h-5 border-l opacity-40 mx-2"
          ></span>
          <button
            bind:this={navButton}
            class="cursor-pointer hidden lg:block px-2 py-1 flex-shrink-0 [&_svg]:!h-[1.5rem] squishy-button"
          >
            {@html ChevronDownIcon}
          </button>
        </div>
      </div>
      <div
        class="lg:contents flex items-center gap-x-0.5 *:cursor-pointer *:p-2"
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

  <!-- Desktop navigation lol -->
  <aside
    bind:this={navLinksCurtain}
    class="select-none z-40 fixed inset-x-0 top-0 bg-kuro-dark1 overflow-hidden"
    style="height: 0%; pointer-events:none"
  >
    <div class="mx-auto max-w-screen-lg px-6 pt-20 *:px-6 space-y-6">
      <div
        class="flex justify-between items-center pb-4 border-b border-b-kuro-lavender-200/30"
      >
        <span class="font-bold text-2xl">Explore</span>

        <div class="inline-flex items-center gap-x-1">
          <kbd class="bg-kuro-lavender-100/20 px-1 py-1 rounded-md text-xs"
            >&lbrack;ESC&rbrack;</kbd
          >
          <button
            bind:this={navClose}
            class="p-2 rounded-md cursor-pointer squishy-button"
          >
            {@html CloseIcon}
          </button>
        </div>
      </div>
      <section class="grid grid-flow-col grid-cols-3 grid-rows-2 gap-12">
        {#each inlineNavItems as { href: hrefHeading, text: textHeading, subitems, rowSpan }}
          <div
            role="listbox"
            class="space-y-2"
            style={rowSpan
              ? `grid-row: span ${rowSpan}/span ${rowSpan}`
              : undefined}
          >
            <div class="mb-4 opacity-65">
              <a href={hrefHeading} class="font-kuro-mono uppercase"
                >{textHeading}</a
              >
            </div>
            {#each subitems as { href, text }}
              <a {href} class="block text-lg">{text}</a>
            {/each}
          </div>
        {/each}
      </section>
    </div>
  </aside>
</div>
<div class="h-12"></div>

<style lang="postcss">
  @reference "../../styles/global.css";

  .squishy-button {
    @apply relative before:duration-[250ms] before:pointer-events-none before:absolute before:-z-10 before:rounded-sm before:size-full before:inset-0 before:transition-all hover:before:bg-kuro-lavender-200/20 before:scale-[0.96] hover:before:scale-100;
  }
</style>
