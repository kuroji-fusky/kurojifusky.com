<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { twMerge } from "tailwind-merge";

  interface Props extends Omit<HTMLAnchorAttributes, "children"> {
    children?: Snippet | string;
  }

  const { children, href, class: classN, ...others }: Props = $props();

  const isHttp = href?.startsWith("http");
</script>

<a
  {href}
  target={isHttp ? "_blank" : undefined}
  class={twMerge(
    "inline-flex opacity-60 hover:opacity-100 transition-opacity",
    classN as string,
  )}
  {...others}
>
  {@render (children as Snippet)?.()}
</a>
