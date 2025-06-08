<script lang="ts">
  import type { ArtworkItemProps as ArtworkItems } from "./ArtworkSchema.ts";

  interface Props {
    items: ArtworkItems[];
  }

  const { items }: Props = $props();
</script>

<div class="fixed inset-0 hidden">items here</div>
