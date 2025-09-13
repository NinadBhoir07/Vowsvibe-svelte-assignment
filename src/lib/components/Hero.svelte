<script>
</script>

<div class="hero-container">
  <div class="hero-title-container">
    <h1 class="bhagavad-gita-title">BHAGAVAD GITA</h1>
  </div>

  <div class="banner-container">
    <img src="images/gita_banner.png" alt="gita_banner" class="banner-image" />
  </div>

  <!-- Second image container -->
  <div class="open-book-container">
    <div class="open-book-wrapper">
      <img
        src="images/gita_open.png"
        alt="Gita Banner"
        class="open-book-image"
      />
    </div>
  </div>
</div>

<style>
  .hero-container {
    width: 100%;
    height: auto;
    min-height: 400px;
    position: relative;
    overflow: hidden;
  }

  .hero-title-container {
    position: relative;
    z-index: 10;
    top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 2rem 1rem;
    background: rgba(255, 255, 255, 0.64);
    margin: 0 auto;
    max-width: 100%;
  }

  .bhagavad-gita-title {
    font-size: 7rem;
    font-weight: 300;
    font-family: "edensor" !important;
    color: #2c3e2d;
    line-height: 1;
    margin: 0;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    word-spacing: 1rem;
    background: linear-gradient(135deg, #2c3e2d 0%, #4a5d4b 50%, #2c3e2d 100%);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: all 0.3s ease;
    padding-bottom: 10px;
  }

  .banner-container {
    position: relative;
    width: 100%;
    height: auto;
    margin-top: -40px;
  }

  .banner-image {
    width: 100%;
    height: auto;
    min-height: 200px;
    max-height: 500px;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  .open-book-container {
    position: relative;
    top: -110px;
    width: 100%;
    max-width: 9xl;
    margin: 0 auto;
    padding: 0 1rem;
    z-index: 15;
  }

  .open-book-wrapper {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .open-book-image {
    max-width: 100%;
    height: auto;
    max-height: 160px;
    object-fit: contain;
  }

  /* Tablet styles */
  @media (max-width: 1024px) {
    .hero-title-container {
      top: 30px;
      padding: 1.5rem 1rem;
    }

    .bhagavad-gita-title {
      font-size: clamp(2rem, 7vw, 5rem);
      letter-spacing: clamp(0.08em, 0.12em, 0.12em);
      word-spacing: clamp(0.3em, 0.4em, 0.4em);
    }

    .open-book-container {
      top: -120px;
    }

    .open-book-image {
      max-height: 140px;
    }
  }

  /* Mobile landscape */
  @media (max-width: 768px) {
    .hero-container {
      min-height: 350px;
    }

    .hero-title-container {
      top: 20px;
      padding: 1.2rem 0.5rem;
      background: rgba(255, 255, 255, 0.75);
    }

    .bhagavad-gita-title {
      font-size: clamp(1.8rem, 6vw, 3.5rem);
      letter-spacing: clamp(0.06em, 0.1em, 0.1em);
      word-spacing: clamp(0.25em, 0.35em, 0.35em);
      white-space: normal;
      line-height: 1.1;
    }

    .banner-image {
      min-height: 180px;
      max-height: 350px;
    }

    .open-book-container {
      top: -100px;
      padding: 0 0.5rem;
    }

    .open-book-image {
      max-height: 120px;
    }
  }

  /* Mobile portrait */
  @media (max-width: 480px) {
    .hero-container {
      min-height: 320px;
    }

    .hero-title-container {
      top: 15px;
      padding: 1rem 0.25rem;
      background: rgba(255, 255, 255, 0.8);
    }

    .bhagavad-gita-title {
      font-size: clamp(1.5rem, 5vw, 2.5rem);
      letter-spacing: clamp(0.04em, 0.08em, 0.08em);
      word-spacing: clamp(0.15em, 0.25em, 0.25em);
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    }

    .banner-image {
      min-height: 150px;
      max-height: 280px;
    }

    .open-book-container {
      top: -80px;
      padding: 0 0.25rem;
    }

    .open-book-image {
      max-height: 100px;
    }
  }

  /* Very small screens */
  @media (max-width: 360px) {
    .hero-container {
      min-height: 280px;
    }

    .hero-title-container {
      top: 10px;
      padding: 0.8rem 0.25rem;
    }

    .bhagavad-gita-title {
      font-size: clamp(1.2rem, 4.5vw, 2rem);
      letter-spacing: 0.05em;
      word-spacing: 0.2em;
    }

    .banner-image {
      min-height: 120px;
      max-height: 220px;
    }

    .open-book-container {
      top: -60px;
    }

    .open-book-image {
      max-height: 80px;
    }
  }

  /* Landscape orientation on mobile */
  @media (max-width: 768px) and (orientation: landscape) {
    .hero-container {
      min-height: 250px;
    }

    .hero-title-container {
      top: 10px;
      padding: 0.8rem 0.5rem;
    }

    .bhagavad-gita-title {
      font-size: clamp(1.5rem, 4vw, 2.5rem);
    }

    .banner-image {
      min-height: 120px;
      max-height: 200px;
    }

    .open-book-container {
      top: -60px;
    }

    .open-book-image {
      max-height: 80px;
    }
  }

  /* High resolution screens */
  @media (min-width: 1200px) {
    .bhagavad-gita-title {
      font-size: 7rem;
      letter-spacing: 0.15em;
      word-spacing: 0.5em;
    }

    .open-book-image {
      max-height: 180px;
    }
  }

  /* Print styles */
  @media print {
    .hero-container {
      background: white;
      color: black;
    }

    .bhagavad-gita-title {
      color: black !important;
      -webkit-text-fill-color: black !important;
      text-shadow: none;
    }
  }
</style>
