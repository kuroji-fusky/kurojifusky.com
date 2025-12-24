<script lang="ts">
  import { ChevronDownIcon } from "$lib/components/icons";
  import type { topNav } from "./navMap";

  type Props = (typeof topNav)[number];

  const { heading, icon, subitems, link }: Props = $props();

  let isOpen = $state(false);
</script>

<div class="space-y-3 contents *:border-b-neutral-600 last:*:border-b-transparent">
  <div class="flex items-center py-2 border-b">
    <a href={link} class="flex-1 flex gap-x-2 items-center py-1">
      {@html icon}
      <span class="text-base font-semibold">{heading}</span>
    </a>
    {#if subitems}
      <hr class="h-5 border-l border-l-neutral-700 mx-2" />
      <button onclick={() => (isOpen = !isOpen)} class={["p-2", isOpen && "rotate-180" ]} >
        {@html ChevronDownIcon}
      </button>
    {/if}
  </div>
  {#if subitems}
    {#if isOpen}
      <ul class="pb-3">
        {#each subitems as { heading, text, link }}
          {#if link && text}
            <li>
              <a href={link} class="py-2.5 block">{text}</a>
            </li>
          {:else}
            <li class="py-2 opacity-50">{heading}</li>
          {/if}
        {/each}
      </ul>
    {/if}
  {/if}
</div>
