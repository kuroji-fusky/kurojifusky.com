<script lang="ts">
  import { MonitorIcon, LightIcon, DarkIcon } from "./icons";

  interface Props {
    theme: "system" | "sunset-light" | "kuro-light" | "moon-dark" | "cozy-dark";
    ui: "radiobox" | "combobox";
  }

  const { theme = "system", ui = "radiobox" }: Props = $props();
</script>

<div data-theme-switch="" class="contents">
  <div role="radiogroup" class="flex">
    <span>System</span>
    <button role="radio" aria-checked={theme === "system"}>
      {@html MonitorIcon}
    </button>
    <button role="radio" aria-checked={theme.includes("dark")}>
      {@html DarkIcon}
    </button>
    <button role="radio" aria-checked={theme.includes("light")}>
      {@html LightIcon}
    </button>
  </div>
</div>
