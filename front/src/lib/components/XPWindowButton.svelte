<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import HelpIcon from "../icons/xp/help.svg?raw";
  import CloseIcon from "../icons/xp/close.svg?raw";
  import MinimizeIcon from "../icons/xp/min.svg?raw";

  interface Props extends Pick<HTMLButtonAttributes, "onclick"> {
    variant?: "close" | "minimize" | "help";
    disabled?: boolean;
  }

  const { variant = "close", disabled = false }: Props = $props();

  const iconMap: Record<NonNullable<Props["variant"]>, string> = {
    close: CloseIcon,
    minimize: MinimizeIcon,
    help: HelpIcon,
  };
</script>

<button
  class={[
    "before:absolute before:inset-1 from-white to-35% before:block",
    "relative p-1 bg-linear-[135deg] rounded-sm border-[1.6px]",
    variant !== "close"
      ? "from-[#245FF5] to-[#256BF8]"
      : "from-[#E46446] to-[#E65D32]",
    !disabled ? "" : "opacity-60",
  ]}
>
  {@html iconMap[variant]}
</button>
