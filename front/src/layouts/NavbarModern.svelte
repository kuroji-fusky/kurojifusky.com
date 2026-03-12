<script lang="ts">
  import { XIcon, MenuIcon, KuroLogoBrandRaw } from "$lib/components/icons";
  import { topNav } from "./navMap";
  import EclipseIcon from "~icons/lucide/moon?raw";
  import SearchIcon from "~icons/lucide/search?raw";
  import {
    Dropdown,
    DropdownButton,
    DropdownContent,
  } from "$lib/components/Dropdown";
  import Button from "$lib/components/Button.svelte";
  import { onMount, setContext, type Snippet } from "svelte";
  import { writable } from "svelte/store";
  import Portal from "$lib/components/Portal.svelte";
  import NavbarItemCollapsible from "./NavbarModernItemCollapsible.svelte";
  import { isModalTriggered } from "$lib/stores";
  import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
  import { fly } from "svelte/transition";

  let themeDropdownShow = $state(false);

  const themeDropdownToggle = () => (themeDropdownShow = !themeDropdownShow);

  let desktopSidebarToggle = writable(true);
  setContext("DESKTOP-TOGGLE", desktopSidebarToggle);

  let mobileNavbarOpen = $state(false);

  const TABLET_VW = 1024;

  function mobileResize() {
    const isTabletVw = window.innerWidth <= TABLET_VW;

    if (mobileNavbarOpen && !isTabletVw) {
      mobileNavbarOpen = false;
      return;
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (!($isModalTriggered && mobileNavbarOpen && e.key === "Escape")) return;

    mobileNavbarOpen = false;
    return;
  }

  onMount(() => {
    mobileResize();
  });

  const docClasses = "overflow-y-hidden";

  $effect(() => {
    const docBody = document.body.classList;

    isModalTriggered.set(mobileNavbarOpen);

    $isModalTriggered ? docBody.add(docClasses) : docBody.remove(docClasses);
  });
</script>

<svelte:window onresize={mobileResize} onkeydown={handleKeyDown} />

<header
  class="z-20 fixed top-0 inset-x-0 h-16 bg-neutral-100 dark:bg-neutral-950 lg:bg-transparent!"
>
  <div
    class="w-(--sidebar-width) pl-5 pr-3 absolute inline-flex items-center top-0 left-0 py-4"
  >
    <div class="inline-flex items-center flex-1 gap-x-2 h-9">
      <a href="/" class="pl-1.5 *:size-5">
        {@html KuroLogoBrandRaw}
      </a>
    </div>
    <!-- Desktop toggle -->
    <Button aria-label="Toggle menu" class="hidden lg:block">
      {@html MenuIcon}
    </Button>
  </div>
  <div
    class="absolute top-0 right-0 pr-5 py-4 inline-flex items-center gap-x-2"
  >
    <Dropdown>
      <DropdownButton
        class="px-2 py-1.5 rounded-md dark:hover:bg-neutral-600/30 hover:bg-neutral-400/30 dark:focus:bg-neutral-600/30 transition-colors duration-100 cursor-pointer hidden lg:inline-flex items-center"
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
        eventToggler={themeDropdownToggle}
      >
        <ThemeSwitcher theme="system" ui="radiobox" />
      </DropdownContent>
    </Dropdown>
    <Button aria-label="Search">
      {@html SearchIcon}
    </Button>
    <!-- Mobile toggle -->
    <button
      class="lg:hidden block p-2 rounded-md dark:hover:bg-neutral-600/30 hover:bg-neutral-400/30 dark:focus:bg-neutral-600/30 transition-colors duration-100 cursor-pointer"
      aria-label="Toggle menu"
      onclick={() => (mobileNavbarOpen = !mobileNavbarOpen)}
    >
      {#if !mobileNavbarOpen}
        {@html MenuIcon}
      {:else}
        {@html XIcon}
      {/if}
    </button>
  </div>
</header>

<Portal focusGuard={false}>
  {#if mobileNavbarOpen}
    <nav
      transition:fly={{ duration: 250, x: "100%", opacity: 1 }}
      id="nav-mobile"
      class="lg:hidden grid grid-rows-[1fr_auto] fixed top-16 inset-0 z-20 bg-white dark:bg-neutral-950 *:px-3"
    >
      <section
        class="sm:block hidden h-full overflow-y-auto overflow-x-hidden scheme-light-dark"
      >
        YEET
      </section>
      <section
        class="sm:hidden block h-full overflow-y-auto overflow-x-hidden scheme-light-dark"
      >
        {#each topNav as { heading, icon, link, subitems }}
          <NavbarItemCollapsible {heading} {icon} {link} {subitems} />
        {/each}
      </section>
      <section class="py-6 border-t border-t-neutral-600 flex justify-between">
        <span>Device theme</span>
        <ThemeSwitcher theme="system" ui="radiobox" />
      </section>
    </nav>
  {/if}
</Portal>
