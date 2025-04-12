<script lang="ts">
  import LogoBrand from "~icons/kuro/logo-brand?raw";
  import SearchIcon from "~icons/lucide/search?raw";

  const navLinks = [
    { href: "/portfolio", text: "Portfolio" },
    { href: "/blog", text: "Blog" },
    { href: "/about", text: "About" },
  ];
</script>

<a
  href="#skip-to-content"
  class="fixed top-2 left-2 pointer-events-none focus:pointer-events-auto focus:opacity-100 focus:translate-x-0 translate-x-full opacity-0 bg-kuro-lavender-700 z-50 px-4 py-2.5 rounded-md"
  data-astro-prefetch="false">Skip to content?</a
>
<div class="z-20 sticky top-0 bg-kuro-dark2">
  <nav class="py-1.5 flex justify-between px-6 max-w-screen-xl mx-auto">
    <a
      href="/"
      title="Home page"
      class="py-2 pr-1 flex-shrink-0 [&_svg]:!h-[1.33rem]"
    >
      {@html LogoBrand}
    </a>
    <div
      id="global-nav"
      class="w-full justify-end my-auto flex items-center gap-x-1 font-kuro-mono text-sm"
    >
      {#each navLinks as { href, text }}
        <a {href} class="px-3 py-1.5">
          {text}
        </a>
      {/each}
    </div>
    <button class="px-3 py-2 cursor-pointer">
      {@html SearchIcon}
    </button>
  </nav>
</div>
