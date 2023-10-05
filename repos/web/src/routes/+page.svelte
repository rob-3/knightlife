<script lang="ts">
  import type { PageData } from './$types';

  let count = 0;

  export let data: PageData;
  const sampleData = data.data;
</script>

<button
  on:click={() => (count += 1)}
  class="rounded-2xl bg-purple-500 px-8 py-4 text-4xl font-bold text-white hover:bg-purple-700"
>
  Clicks: {count}
</button>

<!--Display data fetched-->
<h1 class="mt-8 text-xl font-bold">Data fetched from Express backend:</h1>
<ul class="mt-4 flex flex-col space-y-4">
  {#each sampleData as item}
    <li class="text-lg">
      <span>{item.id}</span> - {item.name}
    </li>
  {/each}
</ul>
