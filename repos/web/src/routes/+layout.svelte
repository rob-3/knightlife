<script>
  import "./styles.css";
  import { onMount } from "svelte";
  import { pwaInfo } from "virtual:pwa-info";

  onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await import("virtual:pwa-register");
      registerSW({
        immediate: true,
        onRegistered(r) {
          console.log(`SW Registered: ${r}`);
        },
        onRegisterError(error) {
          console.log("SW registration error", error);
        }
      });
    }
  });

  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
</script>

<svelte:head>
  {@html webManifest}
</svelte:head>

<main class="flex min-h-screen flex-col items-center justify-center">
  <slot />
</main>

{#await import("$lib/ReloadPrompt.svelte") then { default: ReloadPrompt }}
  <ReloadPrompt />
{/await}
