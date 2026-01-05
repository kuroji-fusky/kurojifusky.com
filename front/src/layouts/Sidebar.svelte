<script lang="ts">
  import SidebarItem from "./SidebarItem.svelte";
  import ArrowLeftIcon from "~icons/lucide/arrow-left?raw";

  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  import { topNav } from "./navMap";

  interface Props {
    ssr_currentPath: string;
  }

  const { ssr_currentPath }: Props = $props();

  let currentPath = $state(ssr_currentPath);
  const rootPath = $derived(currentPath === "/");

  // Track the last active parent nav item for subroutes
  let activeParent = $state<(typeof topNav)[number] | undefined>(
    topNav.find(
      (x) =>
        x.link === currentPath ||
        (x.link !== "/" && currentPath.startsWith(x.link)),
    ),
  );

  const navGate = $derived(
    !rootPath && !!activeParent && !!activeParent.subitems,
  );

  const filteredItems = $derived(activeParent);

  onMount(() => {
    document.addEventListener("astro:page-load", () => {
      // Don't do anything if they're on the same route
      if (location.pathname === currentPath) return;

      currentPath = location.pathname;

      // Only reset to root nav if at root
      if (currentPath === "/") {
        activeParent = undefined;
      } else {
        // Try to find a topNav parent for the current path
        const parent = topNav.find(
          (x) => x.link !== "/" && currentPath.startsWith(x.link),
        );
        // If not found, keep previous activeParent (for deep dynamic routes), otherwise, keep previous activeParent
        if (parent) {
          activeParent = parent;
        }
      }
    });
  });
</script>

<aside
  id="context-switcher"
  class="lg:row-span-2 fixed inset-y-0 left-0 w-(--sidebar-width) pt-24 h-full hidden lg:flex flex-col justify-between overflow-x-hidden border-r border-r-neutral-700 bg-neutral-100 dark:bg-neutral-950 rounded-lg"
>
  <div class="relative *:absolute *:top-0 *:inset-x-0 w-full">
    {#if !navGate}
      <nav transition:fly={{ x: -255 }} class="px-4 flex flex-col w-full">
        {#each topNav as item}
          <SidebarItem
            {currentPath}
            hasSubitem={item.subitems && item.subitems.length > 0}
            link={item.link}
          >
            <span class="align-middle inline-block mr-1">
              {@html item.icon}
            </span>
            {item.heading}
          </SidebarItem>
        {/each}
      </nav>
    {:else}
      <nav transition:fly={{ x: 25 }} class="px-4 flex flex-col w-full">
        <a
          href="/"
          class="px-3 group hover:opacity-60 transition-opacity pb-3.5 flex items-center"
        >
          <span
            class="align-middle inline-block mr-1 group-hover:-translate-x-1 transition-transform py-2"
          >
            {@html ArrowLeftIcon}
          </span>
          <div
            class="h-2.5 border ml-1 mr-2 transition-[margin] rotate-18 opacity-50"
          ></div>

          <span
            >{topNav?.find((x) => x.link.startsWith(currentPath!))
              ?.heading}</span
          >
        </a>
        {#each filteredItems?.subitems as item}
          {#if item.link && item.text}
            <SidebarItem hasSubitem={false} {currentPath} link={item.link}
              >{item.text}</SidebarItem
            >
          {:else if item.heading}
            <h2 class="opacity-35 px-2.5 pb-1.5 pt-5 select-none">
              {item.heading}
            </h2>
          {/if}
        {/each}
      </nav>
    {/if}
  </div>
</aside>
