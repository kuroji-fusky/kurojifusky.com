<script lang="ts">
  import type { Snippet } from "svelte";
  import { useSharedDropdownState } from "./dropdown";

  interface Props {
    children?: Snippet;
  }

  // useSharedDropdownState();

  const { children }: Props = $props();
</script>

{@render children?.()}
