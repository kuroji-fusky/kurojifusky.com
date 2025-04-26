<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    target: string;
  }

  const { children, target }: Props = $props();

  const moveDom = (node: Element, inject: string) => {
    document.querySelector(inject)!.appendChild(node);
  };
</script>

<div use:moveDom={target} data-kuro-portal="" style="display: contents;">
  {@render children()}
</div>
