<script lang="ts">
  import A11yIcon from "~icons/lucide/person-standing?raw";

  // biome-ignore lint/style/useConst:
  let isPanelOpen = $state(false);
</script>

<div class="relative">
  <button
    class="p-2 hidden md:block"
    aria-label="Accessibility options"
    onclick={() => (isPanelOpen = !isPanelOpen)}
  >
    {@html A11yIcon}
  </button>

  {#if isPanelOpen}
    <div
      class="absolute top-10 mt-2 p-2 rounded-sm border right-0 bg-kuro-dark2 w-fit"
    >
      <div>squish content</div>
      <div>reduced motion</div>
      <div>menace mode</div>
    </div>
  {/if}
</div>
