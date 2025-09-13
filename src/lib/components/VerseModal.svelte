<script>
  export let verse = null;
  export let isOpen = false;
  export let onClose = () => {};

  let isProjectorMode = false;

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function handleKeydown(event) {
    if (event.key === "Escape") {
      onClose();
    }
  }

  function toggleProjectorMode() {
    isProjectorMode = !isProjectorMode;
  }

  function closeProjectorMode() {
    isProjectorMode = false;
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen && verse}
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    on:click={handleBackdropClick}
    role="dialog"
    aria-modal="true"
  >
    <div class="verse-modal">
      <!-- Close button (X) -->
      <button class="close-button" on:click={onClose} aria-label="Close modal">
        ✕
      </button>

      <!-- Projector icon -->
      <button
        class="projector-button"
        on:click={toggleProjectorMode}
        aria-label="Projector mode"
      >
        <svg class="projector-icon" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          />
        </svg>
      </button>

      <!-- Content -->
      <div class="verse-content">
        {#if verse.sanskrit}
          {@html verse.sanskrit}
        {:else if verse.lyrics}
          <div class="sanskrit-text">{verse.lyrics}</div>
        {/if}

        {#if verse.transliteration}
          <div class="transliteration">
            {@html verse.transliteration}
          </div>
        {/if}

        {#if verse.translation}
          <div class="translation">
            {@html verse.translation}
          </div>
        {/if}
      </div>

      <!-- Audio Player -->
      {#if verse.audio}
        <div class="audio-container">
          <audio class="audio-player" controls src={verse.audio}>
            Your browser does not support the audio element.
          </audio>
        </div>
      {/if}
    </div>
  </div>
{/if}

<!-- Projector Mode -->
{#if isProjectorMode && isOpen && verse}
  <div class="projector-overlay">
    <button class="projector-close" on:click={closeProjectorMode}> ✕ </button>

    <div class="projector-content">
      {#if verse.sanskrit}
        {@html verse.sanskrit}
      {:else if verse.lyrics}
        <div class="sanskrit-text">{verse.lyrics}</div>
      {/if}

      {#if verse.transliteration}
        <div class="transliteration">
          {@html verse.transliteration}
        </div>
      {/if}

      {#if verse.translation}
        <div class="translation">
          {@html verse.translation}
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .verse-modal {
    background: linear-gradient(135deg, #faf0e6 0%, #f5e6d3 100%);
    border-radius: 20px;
    width: 90%;
    max-width: 600px;
    max-height: 80vh;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    position: relative;
    padding: 40px 50px 30px 50px;
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 25px;
    background: none;
    border: none;
    font-size: 28px;
    color: #666;
    cursor: pointer;
    z-index: 10;
    padding: 5px;
    line-height: 1;
    transition: color 0.2s ease;
  }

  .close-button:hover {
    color: #333;
  }

  .projector-button {
    position: absolute;
    top: 20px;
    right: 70px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    color: #666;
    transition: color 0.2s ease;
  }

  .projector-button:hover {
    color: #333;
  }

  .projector-icon {
    width: 24px;
    height: 24px;
  }

  .verse-content {
    text-align: center;
    line-height: 1.8;
    margin-bottom: 30px;
    overflow-y: auto;
    max-height: 50vh;
  }

  .verse-content :global(p) {
    margin: 15px 0;
    font-size: 18px;
    font-weight: bold;
  }

  .verse-content :global(span) {
    font-weight: bold;
  }

  .verse-content :global(span[style*="color:#CC0099"]),
  .verse-content :global(span[style*="color:#cc0099"]) {
    color: #cc0099 !important;
  }

  .verse-content :global(span[style*="color:#7030A0"]),
  .verse-content :global(span[style*="color:#7030a0"]) {
    color: #7030a0 !important;
  }

  .verse-content :global(span[style*="color:#806000"]) {
    color: #806000 !important;
  }

  .verse-content :global(span[style*="color:red"]) {
    color: #ff0000 !important;
  }

  .verse-content :global(span[style*="color:#00B0F0"]),
  .verse-content :global(span[style*="color:#00b0f0"]) {
    color: #00b0f0 !important;
  }

  .verse-content :global(span[style*="color:#0070C0"]),
  .verse-content :global(span[style*="color:#0070c0"]) {
    color: #0070c0 !important;
  }

  .verse-content :global(span[style*="color:#00B050"]),
  .verse-content :global(span[style*="color:#00b050"]) {
    color: #00b050 !important;
  }

  .verse-content :global(span[style*="color:#C00000"]),
  .verse-content :global(span[style*="color:#c00000"]) {
    color: #c00000 !important;
  }

  .verse-content :global(span[style*="color:#FF6600"]),
  .verse-content :global(span[style*="color:#ff6600"]) {
    color: #ff6600 !important;
  }

  .sanskrit-text {
    font-family: "Noto Sans Devanagari", "Arial Unicode MS", sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin: 15px 0;
  }

  .transliteration {
    font-style: italic;
    font-size: 18px;
    margin: 15px 0;
    color: #333;
  }

  .translation {
    font-style: italic;
    font-size: 18px;
    margin: 15px 0;
    color: #555;
  }

  .audio-container {
    margin-top: 20px;
    padding-top: 20px;
  }

  .audio-player {
    width: 100%;
    height: 40px;
    outline: none;
    border-radius: 8px;
  }

  .projector-overlay {
    position: fixed;
    inset: 0;
    background: #000;
    z-index: 60;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
  }

  .projector-close {
    position: absolute;
    top: 30px;
    right: 40px;
    background: none;
    border: none;
    font-size: 36px;
    color: white;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    transition: background-color 0.2s ease;
  }

  .projector-close:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .projector-content {
    text-align: center;
    color: white;
    font-size: 28px;
    line-height: 1.8;
    max-width: 80%;
  }

  .projector-content :global(p) {
    margin: 20px 0;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .verse-modal {
      width: 95%;
      padding: 30px 25px 20px 25px;
      margin: 20px;
    }

    .close-button {
      top: 15px;
      right: 20px;
      font-size: 24px;
    }

    .projector-button {
      top: 15px;
      right: 60px;
    }

    .projector-icon {
      width: 20px;
      height: 20px;
    }

    .verse-content :global(p) {
      font-size: 16px;
    }

    .sanskrit-text {
      font-size: 18px;
    }

    .transliteration,
    .translation {
      font-size: 16px;
    }

    .projector-content {
      font-size: 22px;
      max-width: 90%;
    }
  }

  @media (max-width: 480px) {
    .verse-modal {
      padding: 25px 20px 15px 20px;
    }

    .verse-content :global(p) {
      font-size: 14px;
    }

    .sanskrit-text {
      font-size: 16px;
    }

    .transliteration,
    .translation {
      font-size: 14px;
    }

    .projector-content {
      font-size: 20px;
    }
  }
</style>
