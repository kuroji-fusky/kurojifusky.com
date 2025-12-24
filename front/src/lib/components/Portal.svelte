<script lang="ts">
  import type { Snippet } from "svelte";

  const moveDom = (node: Element, inject: string) => {
    const target = document.querySelector(inject);
    target?.appendChild(node);
  };

  interface Props {
    children?: Snippet;
    focusGuard: boolean;
  }

  const { children, focusGuard }: Props = $props();
</script>

<div use:moveDom={"body"} data-portal="" class="contents">
  {#if focusGuard}
    <button id="focus-guard" aria-hidden="true" class="sr-only"></button>
  {/if}
  {@render children?.()}
  {#if focusGuard}
    <button id="focus-guard" aria-hidden="true" class="sr-only"></button>
  {/if}
</div>
