<script lang="ts">
  import { type Snippet } from "svelte";

  interface Props {
    children: Snippet;
    target: string;
  }

  const { children, target }: Props = $props();

  const moveDom = (node: Element, inject: string) => {
    document.querySelector(inject)!.appendChild(node);
  };
</script>

<kuro-ui-portal use:moveDom={target} style="display: contents;">
  {@render children()}
</kuro-ui-portal>
