<script lang="ts">
  import { MenuIcon, KuroLogoBrand } from "$lib/components/icons";
  import { navToggle } from "$lib/stores";
  import EclipseIcon from "~icons/lucide/moon?raw";
  import SearchIcon from "~icons/lucide/search?raw";
  import {
    Dropdown,
    DropdownButton,
    DropdownContent,
  } from "$lib/components/Dropdown";
  import Button from "$lib/components/Button.svelte";
  import type { Snippet } from "svelte";

  let themeDropdownShow = $state(false);

  const themeDropdownToggle = () => (themeDropdownShow = !themeDropdownShow);

  interface Props {
    branding: Snippet;
    menuIcon: Snippet;
  }

  const { branding, menuIcon }: Partial<Props> = $props();
</script>

<header class="z-10 fixed top-0 inset-x-0 h-14">
  <div
    class="w-(--sidebar-width) pl-5 pr-3 absolute inline-flex items-center top-0 left-0 py-4"
  >
    <div class="inline-flex items-center flex-1 gap-x-2">
      <a href="/" class="pl-1.5">
        {@render branding?.()}
      </a>
    </div>
    <!-- Desktop toggle -->
    <Button aria-label="Toggle menu">
      {@render menuIcon?.()}
    </Button>
  </div>
  <div
    class="absolute top-0 right-0 pr-5 py-4 inline-flex items-center gap-x-1"
  >
    <!-- Mobile toggle -->
    <button
      class="md:hidden block p-2 rounded-md dark:hover:bg-neutral-600/30 hover:bg-neutral-400/30 dark:focus:bg-neutral-600/30 transition-colors duration-100 cursor-pointer"
      aria-label="Toggle menu"
    >
      {@render menuIcon?.()}
    </button>
    <Dropdown>
      <DropdownButton
        class="px-2 py-1.5 rounded-md dark:hover:bg-neutral-600/30 hover:bg-neutral-400/30 dark:focus:bg-neutral-600/30 transition-colors duration-100 cursor-pointer inline-flex items-center"
        onclick={themeDropdownToggle}
        aria-label="Toggle site theme"
      >
        {@html EclipseIcon}
        <span class="text-xs ml-1.5 px-1 py-0.5 rounded-md bg-slate-800"
          >System</span
        >
      </DropdownButton>
      <!-- For theme toggling -->
      <DropdownContent
        anchor="top right"
        heading="Themes baby"
        state={themeDropdownShow}
        eventToggler={themeDropdownToggle}>lmao</DropdownContent
      >
    </Dropdown>
    <Button aria-label="Search">
      {@html SearchIcon}
    </Button>
  </div>
</header>
