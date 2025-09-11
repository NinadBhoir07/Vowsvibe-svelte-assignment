<script>
  import { createEventDispatcher } from "svelte";
  import { chapters } from "../data/chapters.js";

  const dispatch = createEventDispatcher();

  function handleChapterClick(chapter) {
    dispatch("chapterSelect", chapter);
  }
</script>

<section class="h-full relative top-[-150px] w-full">
  <div class="text-center mb-2">
    <p class="text-4xl font-bold text-gray-800 uppercase my-5">GITA CHAPTERS</p>
  </div>
  <div class="diamond-grid-container px-4">
    <div class="diamond-grid">
      {#each chapters as chapter}
        <div
          class="diamond-wrapper"
          on:click={() => handleChapterClick(chapter)}
          on:keydown={(e) => e.key === "Enter" && handleChapterClick(chapter)}
          role="button"
          tabindex="0"
        >
          <div class="diamond-card">
            <div class="diamond-inner">
              <img
                src={chapter.image}
                alt="Chapter {chapter.number}"
                class="diamond-image"
              />
              <div class="diamond-overlay">
                <div class="chapter-number">
                  {chapter.number}
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .diamond-grid-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
  }

  .diamond-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 4rem;
    width: 100%;
    justify-items: center;
    align-items: center;
    min-height: 400px;
  }

  .diamond-wrapper {
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .diamond-wrapper:hover {
    transform: translateY(-8px) scale(1.05);
  }

  .diamond-wrapper:focus {
    outline: none;
    transform: translateY(-8px) scale(1.05);
  }

  .diamond-card {
    width: 130px;
    height: 130px;
    position: relative;
    transform: rotate(45deg);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 2px solid rgba(32, 32, 32, 0.8);
  }

  .diamond-wrapper:hover .diamond-card {
    border-color: rgba(255, 255, 255, 1);
  }

  .diamond-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotate(-45deg);
  }

  .diamond-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    overflow: visible;
  }

  .diamond-wrapper:hover .diamond-image {
    transform: scale(1);
  }

  .diamond-overlay {
    position: absolute;
    width: 100%;
    height: 40px;
    top: 35%;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .diamond-wrapper:hover .diamond-overlay {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));
  }

  .chapter-number {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    transition: all 0.3s ease;
  }

  .diamond-wrapper:hover .chapter-number {
    font-size: 2.2rem;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);
  }

  /* Responsive Design */
  @media (max-width: 1200px) {
    .diamond-grid {
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }

    .diamond-card {
      width: 130px;
      height: 130px;
    }
  }

  @media (max-width: 900px) {
    .diamond-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.2rem;
    }

    .diamond-card {
      width: 120px;
      height: 120px;
    }

    .chapter-number {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 600px) {
    .text-4xl {
      font-size: 1.875rem;
    }

    .diamond-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .diamond-card {
      width: 100px;
      height: 100px;
      border-radius: 15px;
    }

    .diamond-inner {
      border-radius: 10px;
    }

    .chapter-number {
      font-size: 1.5rem;
    }

    .diamond-wrapper:hover .chapter-number {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 400px) {
    .diamond-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.8rem;
    }

    .diamond-card {
      width: 80px;
      height: 80px;
    }

    .chapter-number {
      font-size: 1.2rem;
    }
  }

  .diamond-wrapper:focus .diamond-card {
    outline: 3px solid #3b82f6;
    outline-offset: 2px;
  }
</style>
