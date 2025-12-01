<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import Portal from "../Portal.svelte";

  type _AnchorX = "top" | "bottom";
  type _AnchorY = "left" | "right";
  type Anchor = `${_AnchorX} ${_AnchorY}`;

  interface Props extends HTMLAttributes<EventTarget> {
    anchor: Anchor;
    heading: string;
    children?: Snippet;
    state: boolean;
    eventToggler: () => void;
  }

  const { children, state, eventToggler }: Props = $props();

  onMount(() => {
    window.addEventListener("keydown", ({ key }) => {
      if (key === "Escape" && state) eventToggler();
    });
  });
</script>

<Portal focusGuard={state}>
  {#if state}
    <div class="rounded-md border p-2 absolute">
      {@render children?.()}
    </div>
  {/if}
</Portal>
