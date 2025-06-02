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

  let navRootScope: HTMLDivElement;

  let navDesktop: HTMLDivElement;
  let navButtonDesktop: HTMLButtonElement;

  let navLinksCurtainEl: HTMLElement;

  onMount(() => {
    const gsapCtx = gsap.context(() => {
      // will create a timeline for this for later, in the meantime, this is MVP worthy
      const miniNav = gsap
        .to(navDesktop, {
          y: 15,
          opacity: 0.25,
          filter: "blur(2px)",
          ease: "power3",
        })
        .reversed(true);

      const navLinksCurtain = gsap
        .fromTo(
          navLinksCurtainEl,
          { height: "0%", pointerEvents: "none", ease: "power3" },
          { height: "100%", pointerEvents: "auto", ease: "power3" },
        )
        .reversed(true);

      navButtonDesktop.addEventListener("click", () => {
        const _h = document.documentElement;
        const isTheBitchReversed = miniNav.reversed();

        if (isTheBitchReversed) {
          miniNav.play();
          navLinksCurtain.play();
          _h.classList.add("overflow-y-hidden");
        } else {
          miniNav.reverse();
          navLinksCurtain.reverse();
          _h.classList.remove("overflow-y-hidden");
        }
      });
    }, navRootScope);

    return () => {
      gsapCtx.revert();
    };
  });
</script>

<!-- I'm too lazy to wrap this into separate components, this my code fuk u -->
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
        bind:this={navDesktop}
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
        <div class="absolute flex items-center -right-[3.25rem]">
          <span class="hidden lg:inline-block h-5 border-l opacity-40 mx-2"
          ></span>
          <button
            bind:this={navButtonDesktop}
            class="cursor-pointer hidden lg:block px-2 py-1 flex-shrink-0 [&_svg]:!h-[1.5rem] relative before:duration-[250ms] before:pointer-events-none before:absolute before:-z-10 before:rounded-sm before:size-full before:inset-0 before:transition-all hover:before:bg-kuro-lavender-200/20 before:scale-[0.96] hover:before:scale-100"
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

  <!-- All nav things -->
  <aside
    bind:this={navLinksCurtainEl}
    class="z-40 fixed inset-x-0 top-0 bg-kuro-dark1 overflow-hidden"
    style="height: 0%; pointer-events:none"
  >
    <div class="mx-auto max-w-screen-lg px-6 pt-24 *:px-6 space-y-6">
      <section>Explore the cringe</section>
      <section class="grid grid-flow-col grid-cols-3 grid-rows-2 gap-12">
        {#each navLinks as { href: hrefHeading, text: textHeading, subitems, rowSpan }}
          <div
            role="listbox"
            class="space-y-2"
            style={rowSpan
              ? `grid-row: span ${rowSpan}/span ${rowSpan}`
              : undefined}
          >
            <div class="mb-4 opacity-65">
              <a href={hrefHeading} class="font-kuro-mono">{textHeading}</a>
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
