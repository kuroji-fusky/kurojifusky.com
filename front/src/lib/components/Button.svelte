<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";

  interface Props extends HTMLButtonAttributes {
    children?: Snippet;
  }

  const { children, class: classN, ...others }: Props = $props();
</script>

<button
  data-kuro-button=""
  class={twMerge(
    "p-2 rounded-md dark:hover:bg-neutral-600/30 hover:bg-neutral-400/30 dark:focus:bg-neutral-600/30 transition-colors duration-100 cursor-pointer",
    classN as string,
  )}
  {...others}
>
  {@render children?.()}
</button>
