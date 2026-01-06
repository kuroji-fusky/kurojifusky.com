<script lang="ts">
  import type { Snippet } from "svelte";
  import { ChevronRightIcon, ExtLinkIcon } from "$lib/components/icons";
  import { onMount } from "svelte";

  interface Props {
    link: string;
    hasSubitem?: boolean;
    children?: Snippet;

    // Prop drilling to root Sidebar.svelte component
    currentPath?: string;
  }

  const { children, link, hasSubitem, currentPath }: Props = $props();

  let localCurrentPath = $state(currentPath);

  $effect(() => {
    localCurrentPath = currentPath;
  });

  const trueCurrentPath = $derived(localCurrentPath === link);

  const isLinkHttps = link.startsWith("https");

  onMount(() => {
    document.addEventListener("astro:page-load", () => {
      localCurrentPath = location.pathname;
    });
  });
</script>

<a
  aria-current={trueCurrentPath ? "page" : undefined}
  class="rounded-md aria-[current]:bg-kuro-lavender-800 relative group p-2.5 flex items-center justify-between cursor-pointer before:pointer-events-none before:absolute before:inset-0 before:rounded-md before:dark:bg-white/10 before:bg-black/10 before:transition-[opacity,scale] before:opacity-0 before:scale-95 not-aria-[current]:hover:before:opacity-100 focus-visible:before:opacity-100 hover:before:scale-100 focus-visible:before:scale-100"
  href={link}
  target={isLinkHttps ? "_blank" : undefined}
  rel={isLinkHttps ? "noreferrer noopener" : undefined}
>
  <span
    class="select-none opacity-80 group-hover:opacity-100 group-focus-visible:opacity-100"
  >
    {@render children?.()}</span
  >
  {#if hasSubitem}
    <span
      class="transition-all opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
      >{@html ChevronRightIcon}</span
    >
  {/if}
  {#if isLinkHttps}
    <span
      class="transition-all opacity-50 group-hover:opacity-100 group-focus-visible:opacity-100"
      >{@html ExtLinkIcon}</span
    >
  {/if}
</a>
