<script>
  import "../app.css";
  import { onMount } from "svelte";
  import { showBackToTop } from "../lib/stores/app.js";

  let scrollY = 0;

  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
      showBackToTop.set(scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

<svelte:window bind:scrollY />

<main class="min-h-screen">
  <slot />
</main>

{#if $showBackToTop}
  <div
    class="fixed bottom-5 right-5 bg-red-600 text-white w-12 h-12 flex items-center justify-center text-xl rounded-full cursor-pointer transition-all duration-300 hover:bg-red-800 hover:scale-110 z-50 focus:outline-none focus:ring-4 focus:ring-blue-300"
    on:click={scrollToTop}
    on:keydown={(e) => e.key === "Enter" && scrollToTop()}
    role="button"
    tabindex="0"
  >
    <i class="fa fa-chevron-up"></i>
  </div>
{/if}
