<script lang="ts">
  import Portal from "$components/shared/Portal.svelte";
  import type { ArtworkItemProps as ArtworkItems } from "./ArtworkSchema.ts";

  interface Props {
    items: ArtworkItems[];
  }

  const { items }: Props = $props();
</script>

<Portal target="body">
  <div class="fixed inset-0 hidden">items here</div>
</Portal>
