<script>
</script>

<div class="min-h-[400px] w-full relative">
  <div>
    <div class="hero-title-container">
      <h1 class="bhagavad-gita-title">BHAGAVAD GITA</h1>
    </div>

    <img
      src="images/gita_banner.png"
      alt="gita_banner"
      class="w-full h-full relative top-[-40px] object-fill"
    />
  </div>

  <!-- Second image container -->
  <div class="max-w-4xl relative mx-auto px-4 top-[-150px]">
    <div class="text-center">
      <div class="flex justify-center items-center z-10">
        <img
          src="images/gita_open.png"
          alt="Gita Banner"
          class="max-w-full h-40"
        />
      </div>
    </div>
  </div>
</div>

<style>
  .hero-title-container {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 2rem 1rem;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.7) 50%,
      rgba(255, 255, 255, 0.5) 100%
    );
  }

  .bhagavad-gita-title {
    font-family: "Times New Roman", "Georgia", serif;
    font-size: clamp(2.5rem, 8vw, 6rem);
    font-weight: 400;
    color: #2c3e2d;
    text-align: center;
    letter-spacing: 0.15em;
    line-height: 1.1;
    margin: 0;
    text-shadow:
      2px 2px 4px rgba(0, 0, 0, 0.1),
      0 0 10px rgba(255, 255, 255, 0.8);
    word-spacing: 0.5em;
    background: linear-gradient(135deg, #2c3e2d 0%, #4a5d4b 50%, #2c3e2d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: #2c3e2d;
    transition: all 0.3s ease;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .hero-title-container {
      padding: 1.5rem 0.5rem;
    }

    .bhagavad-gita-title {
      font-size: clamp(1.8rem, 6vw, 3rem);
      letter-spacing: 0.1em;
      word-spacing: 0.3em;
    }
  }

  @media (max-width: 480px) {
    .bhagavad-gita-title {
      font-size: clamp(1.5rem, 5vw, 2.5rem);
      letter-spacing: 0.08em;
      word-spacing: 0.2em;
    }
  }
  @media (max-width: 768px) {
    .text-5xl {
      font-size: 2.5rem;
    }

    h1 {
      font-stretch: ultra-expanded;
    }
  }
</style>
