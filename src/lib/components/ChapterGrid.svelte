<script>
  import { createEventDispatcher } from "svelte";
  import { chapters } from "../data/chapters.js";

  const dispatch = createEventDispatcher();

  function handleChapterClick(chapter) {
    dispatch("chapterSelect", chapter);
  }
</script>

<section
  class="h-full relative top-[-150px] sm:top-[-120px] md:top-[-100px] lg:top-[-150px] w-full"
>
  <div class="text-center mb-4 sm:mb-6 md:mb-8 px-4">
    <p
      class="text-2xl sm:text-xl md:text-2xl lg:text-3xl text-[#bd003c] uppercase lg:my-20 sm:my-4 md:my-5 underline"
    >
      GITA CHAPTERS
    </p>
  </div>
  <div class="diamond-grid-container sm:px-4 md:px-6 lg:px-40">
    <div class="diamond-grid">
      {#each chapters as chapter}
        <div
          class="diamond-wrapper"
          on:click={() => handleChapterClick(chapter)}
          on:keydown={(e) => e.key === "Enter" && handleChapterClick(chapter)}
          role="button"
          tabindex="0"
          aria-label="Chapter {chapter.number}"
        >
          <div class="diamond-card">
            <div class="diamond-inner">
              <img
                src={chapter.image}
                alt="Chapter {chapter.number}"
                class="diamond-image"
                loading="lazy"
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
    min-height: 300px;
    width: 100%;
  }

  .diamond-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.8rem;
    width: 100%;
    height: 100%;
    justify-items: center;
    align-items: center;
    min-height: 300px;
  }

  .diamond-wrapper {
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
    height: 184px;
    width: 174px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .diamond-wrapper:hover {
    transform: translateY(-4px) scale(1.03);
  }

  .diamond-wrapper:focus {
    outline: none;
    transform: translateY(-4px) scale(1.03);
  }

  .diamond-wrapper:active {
    transform: translateY(-2px) scale(1.01);
  }

  .diamond-card {
    width: 80px;
    height: 80px;
    position: relative;
    transform: rotate(45deg);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 2px solid rgba(32, 32, 32, 0.8);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .diamond-wrapper:hover .diamond-card {
    border-color: rgba(239, 68, 68, 0.8);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .diamond-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotate(-45deg);
  }

  .diamond-image {
    position: relative;
    top: -15%;
    right: -25%;
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s ease;
    overflow: visible;
  }

  .diamond-wrapper:hover .diamond-image {
    transform: scale(1.25);
  }

  .diamond-overlay {
    position: absolute;
    width: 100%;
    height: 32px;
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .diamond-wrapper:hover .diamond-overlay {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
  }

  .chapter-number {
    color: white;
    font-size: 1.2rem;

    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    transition: all 0.3s ease;
  }

  .diamond-wrapper:hover .chapter-number {
    font-size: 1.3rem;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9);
  }

  .diamond-wrapper:focus .diamond-card {
    outline: 3px solid #3b82f6;
    outline-offset: 2px;
  }

  /* Small mobile devices */
  @media (min-width: 375px) {
    .diamond-grid {
      grid-template-columns: repeat(1, 1fr);
      gap: 2.5rem;
    }
    .diamond-card {
      width: 90px;
      height: 90px;
    }

    .chapter-number {
      font-size: 1.3rem;
    }

    .diamond-wrapper:hover .chapter-number {
      font-size: 1.4rem;
    }
  }

  /* Large mobile devices */
  @media (min-width: 480px) {
    .diamond-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }

    .diamond-card {
      width: 100px;
      height: 100px;
      border-radius: 15px;
    }

    .chapter-number {
      font-size: 1.4rem;
    }

    .diamond-wrapper:hover .chapter-number {
      font-size: 1.5rem;
    }

    .diamond-overlay {
      height: 36px;
    }
  }

  /* Tablets */
  @media (min-width: 640px) {
    .diamond-grid {
      grid-template-columns: repeat(4, 1fr);
      gap: 2.5rem;
      min-height: 350px;
    }

    .diamond-card {
      width: 110px;
      height: 110px;
      border-radius: 18px;
    }

    .chapter-number {
      font-size: 1.6rem;
    }

    .diamond-wrapper:hover .chapter-number {
      font-size: 1.8rem;
    }

    .diamond-wrapper:hover {
      transform: translateY(-6px) scale(1.04);
    }

    .diamond-overlay {
      height: 38px;
    }
  }

  /* Small laptops */
  @media (min-width: 768px) {
    .diamond-grid {
      grid-template-columns: repeat(5, 1fr);
      gap: 2rem;
      min-height: 380px;
    }

    .diamond-card {
      width: 120px;
      height: 120px;
      border-radius: 20px;
    }

    .chapter-number {
      font-size: 1.8rem;
    }

    .diamond-wrapper:hover .chapter-number {
      font-size: 2rem;
    }

    .diamond-overlay {
      height: 40px;
    }
  }

  /* Large tablets and small desktops */
  @media (min-width: 1024px) {
    .diamond-grid {
      grid-template-columns: repeat(6, 1fr);
      gap: 2.5rem;
      min-height: 400px;
    }

    .diamond-card {
      width: 130px;
      height: 130px;
      border-radius: 20px;
    }

    .chapter-number {
      font-size: 2rem;
    }

    .diamond-wrapper:hover .chapter-number {
      font-size: 2.2rem;
    }

    .diamond-wrapper:hover {
      transform: translateY(-8px) scale(1.05);
    }

    .diamond-overlay {
      height: 42px;
    }
  }

  /* Large desktops */
  @media (min-width: 1280px) {
    .diamond-grid {
      gap: 3rem;
    }

    .diamond-card {
      width: 140px;
      height: 140px;
    }

    .chapter-number {
      font-size: 2.1rem;
    }

    .diamond-wrapper:hover .chapter-number {
      font-size: 2.3rem;
    }
  }

  /* Extra large screens */
  @media (min-width: 1536px) {
    .diamond-grid {
      gap: 4rem;
    }

    .diamond-card {
      width: 150px;
      height: 150px;
    }

    .chapter-number {
      font-size: 2.2rem;
    }

    .diamond-wrapper:hover .chapter-number {
      font-size: 2.4rem;
    }
  }

  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    .diamond-wrapper,
    .diamond-card,
    .diamond-image,
    .diamond-overlay,
    .chapter-number {
      transition: none;
    }

    .diamond-wrapper:hover {
      transform: none;
    }

    .diamond-wrapper:hover .diamond-image {
      transform: none;
    }
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    .diamond-card {
      border-width: 3px;
      border-color: #000;
    }

    .diamond-overlay {
      background: rgba(0, 0, 0, 0.9);
    }

    .chapter-number {
      text-shadow: none;
      font-weight: 900;
    }
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .diamond-card {
      border-color: rgba(255, 255, 255, 0.3);
    }

    .diamond-wrapper:hover .diamond-card {
      border-color: rgba(239, 68, 68, 0.9);
    }
  }
</style>
