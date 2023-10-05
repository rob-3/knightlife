<script lang="ts">
  let count = 0;
</script>

<button
  on:click={() => (count += 1)}
  class="rounded-2xl bg-purple-500 px-8 py-4 text-4xl font-bold text-white hover:bg-purple-700"
>
  Clicks: {count}
</button>
