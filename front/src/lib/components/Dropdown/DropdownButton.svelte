<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  interface Props extends HTMLButtonAttributes {
    children?: Snippet;
  }

  const { children, ...others }: Props = $props();
</script>

<button data-dd-anchor="" {...others}>
  {@render children?.()}
</button>
