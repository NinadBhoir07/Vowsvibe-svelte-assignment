<script>
  import { createEventDispatcher } from "svelte";
  import { shlokData, loading, error } from "../stores/app.js";

  export let chapterNumber = 1;

  const dispatch = createEventDispatcher();

  function handleBackClick() {
    dispatch("back");
  }

  function handleShlokClick(shlok) {
    console.log("Shlok clicked:", shlok);
  }
</script>

<section class="block py-8">
  <div class="max-w-6xl mx-auto px-8">
    <div
      class="text-red-600 cursor-pointer text-lg mb-8 inline-flex items-center gap-2 hover:text-red-800 transition-colors duration-300 focus:outline-none focus:underline focus:text-red-800"
      on:click={handleBackClick}
      on:keydown={(e) => e.key === "Enter" && handleBackClick()}
      role="button"
      tabindex="0"
    >
      &lt; Back
    </div>

    <div class="text-center mb-8">
      <p class="text-3xl font-bold text-gray-800">CHAPTER {chapterNumber}</p>
    </div>

    <div class="flex justify-between items-center mb-8">
      <div>
        <p class="text-xl font-bold text-gray-800">Verse</p>
      </div>
    </div>

    <div class="relative">
      <div class="text-center p-8 {$loading || $error ? 'block' : 'hidden'}">
        <div class="mx-auto {$loading ? 'block' : 'hidden'}">
          <div
            class="w-10 h-10 border-4 border-gray-300 border-t-red-600 rounded-full animate-spin-custom mx-auto"
          ></div>
        </div>
        <div
          class="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200 {$error
            ? 'block'
            : 'hidden'}"
        >
          <p class="m-0">Data Not Found</p>
        </div>
      </div>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 py-8"
      >
        {#each $shlokData as shlok}
          <div
            class="relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:-translate-y-2 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
            on:click={() => handleShlokClick(shlok)}
            on:keydown={(e) => e.key === "Enter" && handleShlokClick(shlok)}
            role="button"
            tabindex="0"
          >
            <img
              src="images/sletter.png"
              alt="Shlok Background"
              class="w-full h-48 object-cover"
            />
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 text-white px-4 py-2 rounded-full font-bold text-center"
            >
              <p class="m-0 text-sm">{shlok.name}</p>
            </div>
            <div
              class="absolute bottom-3 right-3 bg-white bg-opacity-90 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110"
            >
              <span class="hidden">{shlok.lyrics}</span>
              <img src="images/play.png" alt="Play Button" class="w-5 h-5" />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
    }

    .h-48 {
      height: 180px;
    }
  }
</style>
