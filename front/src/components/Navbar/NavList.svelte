<script lang="ts">
  import { Snippet } from "svelte";

  let isNavExpanded = $state(false);

  interface Props {
    hrefHeading: string;
    textHeading: string;
    children: Snippet;
  }

  const { hrefHeading, textHeading, children }: Props = $props();
</script>

<div class="mb-4 opacity-65">
  <a href={hrefHeading} class="lg:font-kuro-mono lg:uppercase">
    {textHeading}
  </a>
</div>
<div class="block lg:contents">
  {@render children()}
</div>
