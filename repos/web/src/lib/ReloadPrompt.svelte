<script lang="ts">
  import { useRegisterSW } from "virtual:pwa-register/svelte";
  const { needRefresh, updateServiceWorker, offlineReady } = useRegisterSW({
    onRegistered(r) {
      console.log(`SW Registered: ${r}`);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    }
  });
  const close = () => {
    offlineReady.set(false);
    needRefresh.set(false);
  };
  $: toast = $offlineReady || $needRefresh;
</script>

{#if toast}
  <div
    class="fixed bottom-0 right-0 z-[2] m-4 border border-gray-700 bg-white p-3 text-left shadow"
    role="alert"
  >
    <div class="mb-2">
      {#if $offlineReady}
        <span> App ready to work offline </span>
      {:else}
        <span> New content available, click on reload button to update. </span>
      {/if}
    </div>
    {#if $needRefresh}
      <button
        class="mr-1.5 border border-gray-700 px-2.5 py-1.5"
        on:click={() => updateServiceWorker(true)}
      >
        Reload
      </button>
    {/if}
    <button class="mr-1.5 border border-gray-700 px-2.5 py-1.5" on:click={close}> Close </button>
  </div>
{/if}
