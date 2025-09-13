<script>
  import { createEventDispatcher } from "svelte";
  import { shlokData, loading, error, loadChapterData } from "../stores/app.js";
  import ErrorMessage from "./ErrorMessage.svelte";
  import LoadingSpinner from "./LoadingSpinner.svelte";
  import VerseModal from "./VerseModal.svelte";

  export let chapterNumber = 1;
  const dispatch = createEventDispatcher();

  // Modal state
  let selectedVerse = null;
  let isModalOpen = false;

  function handleBackClick() {
    dispatch("back");
  }

  function handleShlokClick(shlok) {
    console.log("Shlok clicked:", shlok);
    selectedVerse = shlok;
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
    selectedVerse = null;
  }

  // Function to retry loading data
  function retryLoading() {
    loadChapterData(chapterNumber);
  }
</script>

<section class="block">
  <div class="w-[80%] mx-auto px-2">
    <div
      class="text-red-600 cursor-pointer text-lg inline-flex items-center gap-2 hover:text-red-800 transition-colors duration-300 focus:outline-none focus:underline focus:text-red-800"
      on:click={handleBackClick}
      on:keydown={(e) => e.key === "Enter" && handleBackClick()}
      role="button"
      tabindex="0"
    >
      &lt; Back
    </div>

    <div class="text-center mb-4">
      <p class="text-3xl font-bold text-[#bd003c] underline">
        CHAPTER {chapterNumber}
      </p>
    </div>

    <div class="flex justify-between items-center mb-8">
      <div>
        <p class="text-2xl font-bold text-[#bd003c]">Verse</p>
      </div>
    </div>

    <!-- Updated loading/error section -->
    <div class="relative">
      {#if $loading}
        <LoadingSpinner message="Loading chapter content..." />
      {:else if $error}
        <ErrorMessage error={$error} onRetry={retryLoading} />
      {:else}
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 py-8"
        >
          {#each $shlokData as shlok}
            <div
              class="relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300"
              on:click={() => handleShlokClick(shlok)}
              on:keydown={(e) => e.key === "Enter" && handleShlokClick(shlok)}
              role="button"
              tabindex="0"
            >
              <img
                src="images/sletter.png"
                alt="Shlok Background"
                class="w-[200px] object-cover"
              />
              <div
                class="absolute top-1/2 left-[102px] transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-5 py-2 font-bold text-center h-52 w-40"
              >
                <p class="mt-5 text-3xl">{shlok.name}</p>
                <div
                  class="absolute bottom-3 bg-transparent bg-opacity-90 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 top-26 left-[60px]"
                >
                  <img
                    src="images/play.png"
                    alt="Play Button"
                    class="w-10 h-10"
                  />
                </div>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</section>

<!-- Verse Modal -->
<VerseModal verse={selectedVerse} isOpen={isModalOpen} onClose={closeModal} />

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
