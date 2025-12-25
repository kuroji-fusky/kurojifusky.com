<script lang="ts">
  const stuff = [
    { label: "Content Creation" },
    { label: "UX & Design" },
    { label: "Programming" },
    { label: "Archive things" },
    { label: "Music" },
  ];

  let activeIndex = $state(0);
</script>

<div class="mt-16 flex justify-end overflow-y-hidden">
  <img
    src="./oops.jpg"
    class="translate-y-6 hover:translate-0 transition-transform ease-out size-36 mr-4"
    alt="lol; something peeking"
  />
</div>
<div class="flex items-center">
  <aside class="grid shrink-0 gap-y-2 w-64">
    {#each stuff as a, index}
      <button
        role="tab"
        data-active={index === activeIndex ? "" : undefined}
        onclick={() => (activeIndex = index)}
        class="text-lg px-3 py-2.5 rounded-md border data-active:pointer-events-none"
      >
        {a.label}
      </button>
    {/each}
  </aside>
  <div role="tabpanel" class="flex-1 w-full aspect-16/8 rounded-md border">
    choke me daddy
  </div>
</div>
