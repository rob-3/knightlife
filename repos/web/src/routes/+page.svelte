<script lang="ts">
  //import type { PageData } from "./$types";

  let count = 0;

//  export let data: PageData;
  //const sampleData = data.data;
</script>

<button
  on:click={() => (count += 1)}
  class="rounded-2xl bg-red-500 px-8 py-4 text-4xl font-bold text-white hover:bg-purple-700"
>
  Clicks: {count}
</button>
