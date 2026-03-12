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

  let navCollapsed = $state(false);
  let softMainNav = $state(false);

  let currentPath = $state(ssr_currentPath);
  const rootPath = $derived(currentPath === "/");

  // Helper function to find parent nav item based on current path
  const findActiveParent = (path: string) => {
    return topNav.find(({ link, subitems }) => {
      // Check if current path matches the nav item's link
      if (link === path) return true;

      // Check if current path is a subitem of this nav item
      if (subitems) {
        return subitems.some((subitem) => {
          return "link" in subitem && subitem.link === path;
        });
      }

      // Check if current path starts with the nav item's link (for nested routes)
      if (link !== "/" && path.startsWith(link)) return true;

      return false;
    });
  };

  // Track the last active parent nav item for subroutes
  let activeParent = $state(findActiveParent(ssr_currentPath));

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
        // Find the parent nav based on the current path
        activeParent = findActiveParent(currentPath);
      }
    });
  });
</script>

<aside
  id="context-switcher"
  class="lg:row-span-2 fixed inset-y-0 left-0 w-(--sidebar-width) pt-24 h-full hidden lg:flex flex-col justify-between overflow-x-hidden border-r border-r-neutral-700 bg-neutral-100 dark:bg-neutral-950 rounded-lg"
>
  <div class="relative *:absolute *:top-0 w-full">
    {#if !navGate}
      <nav
        transition:fly={{ x: -300 }}
        class="inset-x-0 px-4 flex flex-col w-full"
      >
        <SidebarItem link="#">
          <!-- <span class="align-middle inline-block mr-1"> </span> -->
          Dicks
        </SidebarItem>
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
      <nav
        data-nav-gate-transitioned=""
        transition:fly={{ x: 300, opacity: 1 }}
        class="inset-x-0 px-4 flex flex-col w-full"
      >
        <a
          href="/"
          class="px-3 group hover:opacity-60 transition-opacity pb-3.5 flex items-center"
        >
          <span
            class="align-middle inline-block mr-1 group-hover:-translate-x-1 transition-transform py-2"
          >
            {@html ArrowLeftIcon}
          </span>
          <span>Back</span>
        </a>
        <!-- Root item -->
        <SidebarItem hasSubitem={false} {currentPath} link={activeParent!.link}>
          {activeParent!.heading}
        </SidebarItem>
        {#each filteredItems!.subitems as item}
          {#if "text" in item}
            <SidebarItem hasSubitem={false} {currentPath} link={item.link}>
              {item.text}
            </SidebarItem>
          {:else if "heading" in item}
            <h2 class="opacity-35 px-2.5 pb-1.5 pt-5 select-none">
              {item.heading}
            </h2>
          {/if}
        {/each}
      </nav>
    {/if}
  </div>
</aside>
