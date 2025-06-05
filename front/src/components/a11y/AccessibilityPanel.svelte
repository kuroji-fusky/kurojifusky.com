<script lang="ts">
  import A11yIcon from "~icons/lucide/person-standing?raw";

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
    <div class="absolute top-10 mt-2 p-2 rounded-sm border right-0">nice</div>
  {/if}
</div>
