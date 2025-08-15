<script
  lang="ts"
  generics="T extends readonly { key: string, href: string, label: string }[]"
>
  import { cn } from "$lib/utils";

  type DeepMutable<T> =
    T extends ReadonlyArray<infer R>
      ? DeepMutable<R>[]
      : T extends object
        ? { -readonly [P in keyof T]: DeepMutable<T[P]> }
        : T;

  interface Props {
    options: DeepMutable<T>;
    defaultVal: T[number]["key"];
  }

  const { options, defaultVal }: Props = $props();
</script>

<div>
  <div
    class="font-kuro-mono flex flex-col lg:flex-row lg:items-center gap-y-0.5 gap-x-2 select-none"
  >
    {#each options as { href, key, label }}
      <a
        {href}
        class={cn(
          key === defaultVal ? "bg-kuro-lavender-700 text-white" : "",
          "rounded-sm px-2 lg:px-1.5 py-1 lg:py-0.5",
        )}
        aria-current={key === defaultVal ? "page" : undefined}
      >
        {label}
      </a>
    {/each}
  </div>
</div>
