<script lang="ts">
  import { cn } from "$lib/utils";
  import { type Snippet } from "svelte";

  interface Props {
    children: Snippet;
    class?: string;
  }

  const { class: cls, children }: Props = $props();
</script>

<kuro-clamp-container
  class={cn([
    "not-[.flex,.inline-block]:block mx-auto max-w-screen-xl px-6",
    cls,
  ])}
>
  {@render children()}
</kuro-clamp-container>
