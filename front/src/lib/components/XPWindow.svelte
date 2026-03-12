<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet;
    title: string;
    customTitle?: Snippet;
    class?: string;
    "container-class"?: string;
  }

  const {
    children,
    title,
    customTitle,
    class: _class,
    "container-class": cc,
  }: Props = $props();
</script>

<div class={["border border-violet-600 rounded-sm overflow-hidden", cc]}>
  <div
    id="kuroxp-title"
    class="flex py-1 pl-2 pr-2.5 bg-linear-180 from-violet-500 via-violet-700 via-70% to-violet-800"
  >
    {#if customTitle}
      {@render customTitle?.()}
    {:else}
      <span class="text-base font-bold text-shadow-sm text-shadow-black"
        >{title}</span
      >
    {/if}
    <span class="flex-1"></span>
  </div>
  <div id="kuroxp-body" class={_class}>
    {@render children?.()}
  </div>
</div>
