<script lang="ts">
  import LogoBrand from "~icons/kuro/logo-brand?raw";
  import SearchIcon from "~icons/lucide/search?raw";
  import MenuIcon from "~icons/lucide/menu?raw";
  import CloseIcon from "~icons/lucide/x?raw";
  import ChevronDownIcon from "~icons/lucide/chevron-down?raw";
  import ChevronRightIcon from "~icons/lucide/chevron-down?raw";
  import { onMount, type Snippet } from "svelte";

  import { gsap } from "gsap";

  interface Props {
    shortNav: Snippet;
    longNav: Snippet;
  }

  const { shortNav, longNav }: Props = $props();

  let isOpen = $state(false);

  let navRootScope: HTMLDivElement;

  let navLinks: HTMLDivElement;
  let navButton: HTMLButtonElement;
  let navClose: HTMLButtonElement;

  let desktopLinksCurtain: HTMLElement;

  onMount(() => {
    const gsapCtx = gsap.context(() => {
      const navAnimTree = gsap.timeline().reversed(true);

      navAnimTree.to(navLinks, {
        y: 6,
        opacity: 0,
        filter: "blur(2px)",
        ease: "power2.inOut",
        pointerEvents: "none",
        duration: 0.33,
      });

      navAnimTree.fromTo(
        desktopLinksCurtain,
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
        "-=0.25",
      );

      // navline blur
      const navContainer = navLinks.parentElement!.parentElement;
      navAnimTree.fromTo(
        navContainer,
        {
          "--bg-opacity": "80%",
          backdropFilter: "blur(12px)",
        },
        {
          "--bg-opacity": "0%",
          backdropFilter: "blur(0px)",
        },
        "-=0.4",
      );

      // descendant to navLinksCurtainEl
      navAnimTree.fromTo(
        desktopLinksCurtain.querySelector("& > div"),
        {
          y: -33,
          pointerEvents: "none",
          filter: "blur(12px)",
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
  <nav
    class="z-50 fixed inset-x-0 top-0"
    style="background-color: color-mix(in oklab, var(--color-kuro-dark2) var(--bg-opacity, 80%), transparent); backdrop-filter: blur(12px);"
  >
    <div
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
        bind:this={navLinks}
        class="hidden lg:flex lg:relative lg:bg-transparent lg:flex-row lg:top-0 lg:items-center absolute flex-col top-14 items-start w-max justify-end my-auto gap-x-1 font-kuro-mono text-sm"
      >
        {@render shortNav()}
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
    </div>
  </nav>

  <!-- Navigation -->
  <aside
    bind:this={desktopLinksCurtain}
    class="select-none z-40 fixed inset-x-0 top-0 bg-kuro-dark1 overflow-hidden"
    style="height: 0%; pointer-events:none"
  >
    <div class="mx-auto max-w-screen-lg px-3 lg:px-6 *:px-6 pt-20 space-y-6">
      <div
        class="hidden lg:flex justify-between items-center pb-4 border-b border-b-kuro-lavender-200/30"
      >
        <span class="font-bold text-2xl">Explore</span>

        <div class="inline-flex items-center gap-x-1">
          <kbd class="text-kuro-lavender-100/50 mr-1 rounded-md text-xs"
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
      <nav
        class="grid lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-2 gap-6 lg:gap-12"
      >
        {@render longNav()}
      </nav>
    </div>
  </aside>
</div>
<div class="h-12"></div>
