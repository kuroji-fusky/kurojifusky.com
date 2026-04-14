<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet;
    windowActions?: Snippet;
    isDraggable?: boolean;
    title: string;
    customTitle?: Snippet;
    class?: string;
    "container-class"?: string;
  }

  const {
    children,
    windowActions,
    title,
    customTitle,
    isDraggable = false,
    class: _class,
    "container-class": cc,
  }: Props = $props();
</script>

<div class={["border-2 border-violet-600 rounded-sm overflow-hidden", cc]}>
  <div
    id="kuroxp-title"
    class="flex items-center py-0.5 pl-1 pr-0.5 bg-linear-180 from-violet-500 via-violet-600 via-80% to-violet-900 cursor-default"
  >
    {#if customTitle}
      {@render customTitle?.()}
    {:else}
      <span class="text-sm font-semibold text-shadow-sm text-shadow-black"
        >{title}</span
      >
    {/if}
    <span class="flex-1"></span>
    {@render windowActions?.()}
  </div>
  <div id="kuroxp-body" class={_class}>
    {@render children?.()}
  </div>
</div>
