<script>
  import Header from "../lib/components/Header.svelte";
  import Hero from "../lib/components/Hero.svelte";
  import ChapterGrid from "../lib/components/ChapterGrid.svelte";
  import ShlokSection from "../lib/components/ShlokSection.svelte";
  import Footer from "../lib/components/Footer.svelte";

  import {
    currentView,
    selectedChapter,
    loading,
    error,
    shlokData,
  } from "../lib/stores/app.js";
  import { shloksData } from "../lib/data/chapters.js";
  import { fade, fly } from "svelte/transition";

  function handleChapterSelect(event) {
    const chapter = event.detail;
    selectedChapter.set(chapter);
    currentView.set("shloks");

    // Simulate loading
    loading.set(true);
    error.set(null);

    setTimeout(() => {
      const chapterShloks = shloksData[chapter.number] || [];
      if (chapterShloks.length === 0) {
        error.set("No data found");
        shlokData.set([]);
      } else {
        shlokData.set(chapterShloks);
        error.set(null);
      }
      loading.set(false);
    }, 1000); // Simulate network delay
  }

  function handleBackToChapters() {
    currentView.set("chapters");
    selectedChapter.set(null);
    shlokData.set([]);
    loading.set(false);
    error.set(null);
  }
</script>

<Header />
<Hero />

<!-- Dynamic content area with smooth transitions -->
<div class=" min-h-inherit">
  {#if $currentView === "chapters"}
    <!-- Chapter Grid Section -->
    <div
      class="content-section"
      in:fade={{ duration: 300, delay: 100 }}
      out:fade={{ duration: 200 }}
    >
      <ChapterGrid on:chapterSelect={handleChapterSelect} />
    </div>
  {:else if $currentView === "shloks" && $selectedChapter}
    <!-- Shlok Section -->
    <div
      class="content-section"
      in:fly={{ x: 100, duration: 400, delay: 100 }}
      out:fly={{ x: -100, duration: 300 }}
    >
      <!-- Shlok content -->
      <ShlokSection
        chapterNumber={$selectedChapter.number}
        on:back={handleBackToChapters}
      />
    </div>
  {/if}

  <!-- Loading overlay -->
  {#if $loading}
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      in:fade={{ duration: 200 }}
      out:fade={{ duration: 200 }}
    >
      <div
        class="bg-white rounded-lg p-6 flex items-center space-x-3 shadow-xl"
      >
        <div
          class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"
        ></div>
        <span class="text-gray-700 font-medium">Loading chapter content...</span
        >
      </div>
    </div>
  {/if}
</div>

<Footer />

<style>
  .content-section {
    min-height: 500px;
    padding-top: 2rem;
  }

  .chapter-context-header {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .back-button {
    display: flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.2s ease;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .back-button:hover {
    background: #2563eb;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .back-button:active {
    transform: translateY(0);
  }
</style>
