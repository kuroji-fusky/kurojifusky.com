<script lang="ts">
  import { ChevronDownIcon } from "$lib/components/icons";
  import type { topNav } from "./navMap";
  import { slide } from "svelte/transition";

  type Props = (typeof topNav)[number];

  const { heading, icon, subitems, link }: Props = $props();

  let isOpen = $state(false);
</script>

<div class="contents last:[&_hr]:hidden">
  <div data-navbar-item-mobile="" class="flex items-center group has-hover:bg-kuro-lavender-700/20 transition-colors rounded-md overflow-hidden h-11">
    <a href={link} class="flex-1 flex gap-x-2 items-center pl-2.5 h-full">
      {@html icon}
      <span class="text-base font-semibold">{heading}</span>
    </a>
    {#if subitems}
      <button
        onclick={() => (isOpen = !isOpen)}
        class={["px-3 h-full transition-colors hover:bg-kuro-lavender-700/50 *:transition-transform", !isOpen && "*:-rotate-90"]}
      >
        {@html ChevronDownIcon}
      </button>
    {/if}
  </div>
  <hr class="border-transparent border-b border-b-neutral-600 mx-3">
  {#if subitems}
    {#if isOpen}
      <div transition:slide={{ duration: 200, axis: "y" }}>
        <ul class="py-3">
          {#each subitems as { heading, text, link }}
            {#if link && text}
              <li>
                <a href={link} class="px-3 py-2.5 block transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-800 rounded-lg">{text}</a>
              </li>
            {:else}
              <li class="px-3 py-2 opacity-50">{heading}</li>
            {/if}
          {/each}
        </ul>
      </div>
    {/if}
  {/if}
</div>
