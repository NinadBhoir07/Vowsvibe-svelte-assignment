<script>
  export let size = "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8";
  export let showLabels = false;
</script>

<div class="footer-bg text-white text-center py-6 sm:py-8 md:py-10 lg:py-12">
  <div class="flex justify-center items-center px-4 sm:px-6 md:px-8">
    <div
      class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
    >
      <h4 class="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-0">
        Connect
      </h4>
      <ul
        class="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 list-none flex-wrap"
      >
        <li>
          <a
            href="https://www.facebook.com/rutger.kortenhorst"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white text-xl sm:text-2xl md:text-3xl hover:text-yellow-300 transition-colors duration-300 inline-flex items-center justify-center p-2 rounded-full hover:bg-white/10"
            aria-label="Facebook"
          >
            <svg
              class="social-icon {size}"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
            {#if showLabels}<span class="ml-2 text-sm hidden sm:inline"
                >Facebook</span
              >{/if}
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/RutgerSanskrit"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white text-xl sm:text-2xl md:text-3xl hover:text-yellow-300 transition-colors duration-300 inline-flex items-center justify-center p-2 rounded-full hover:bg-white/10"
            aria-label="Twitter"
          >
            <svg
              class="social-icon {size}"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
            {#if showLabels}<span class="ml-2 text-sm hidden sm:inline"
                >Twitter</span
              >{/if}
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCfORACtw16NKTrAG7ThVAjw"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white text-xl sm:text-2xl md:text-3xl hover:text-yellow-300 transition-colors duration-300 inline-flex items-center justify-center p-2 rounded-full hover:bg-white/10"
            aria-label="YouTube"
          >
            <svg
              class="social-icon {size}"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              />
            </svg>
            {#if showLabels}<span class="ml-2 text-sm hidden sm:inline"
                >YouTube</span
              >{/if}
          </a>
        </li>
        <li>
          <a
            href="http://www.johnscottus.ie"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white text-xl sm:text-2xl md:text-3xl hover:text-yellow-300 transition-colors duration-300 inline-flex items-center justify-center p-2 rounded-full hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <svg
              class="social-icon {size}"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
            {#if showLabels}<span class="ml-2 text-sm hidden sm:inline"
                >LinkedIn</span
              >{/if}
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="my-6 sm:my-8 md:my-10 px-4">
    <img
      src="images/footer_img.png"
      alt="Wellbeing Svasti Logo"
      class="w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 lg:w-32 lg:h-36 opacity-80 mx-auto"
      loading="lazy"
    />
  </div>

  <h1 class="footer-showcase mb-4 sm:mb-6 md:mb-8 px-4">WELLBEING~SVASTI</h1>

  <div class="px-4 sm:px-6 md:px-8 lg:px-12">
    <p
      class="text-xs sm:text-sm md:text-base opacity-80 leading-relaxed max-w-4xl mx-auto"
    >
      © 2025 Rutger Kortenhorst. All Rights Reserved | Design and Developed by
      <a
        href="#"
        class="text-yellow-300 hover:text-yellow-200 hover:underline transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 rounded"
      >
        Burning Desire Inclusive
      </a>
    </p>
  </div>
</div>

<style>
  .footer-bg {
    background-image: url("images/footer_background.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .footer-showcase {
    margin: 0;
    font-family: "Edensor", serif;
    color: #aea17e;
    line-height: 1.2;
    font-weight: 300;
    /* Mobile-first responsive font sizing */
    font-size: 24px;
  }

  .social-icon {
    transition:
      transform 0.3s ease,
      filter 0.3s ease;
  }

  .social-icon:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 4px 8px rgba(255, 255, 255, 0.2));
  }

  /* Small mobile devices (320px - 479px) */
  @media (min-width: 320px) {
    .footer-showcase {
      font-size: 26px;
    }
  }

  /* Large mobile devices (480px - 639px) */
  @media (min-width: 480px) {
    .footer-showcase {
      font-size: 30px;
    }
  }

  /* Small tablets (640px - 767px) */
  @media (min-width: 640px) {
    .footer-showcase {
      font-size: 35px;
    }
  }

  /* Large tablets (768px - 1023px) */
  @media (min-width: 768px) {
    .footer-showcase {
      font-size: 38px;
    }
  }

  /* Small desktops (1024px - 1279px) */
  @media (min-width: 1024px) {
    .footer-showcase {
      font-size: 42px;
    }
  }

  /* Large desktops (1280px+) */
  @media (min-width: 1280px) {
    .footer-showcase {
      font-size: 45px;
    }
  }

  /* Extra large screens (1536px+) */
  @media (min-width: 1536px) {
    .footer-showcase {
      font-size: 50px;
    }
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    .social-icon {
      filter: contrast(1.2);
    }

    .footer-showcase {
      color: #ffffff;
    }
  }

  /* Reduced motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    .social-icon,
    a {
      transition: none;
    }

    .social-icon:hover {
      transform: none;
      filter: none;
    }
  }

  /* Dark mode adjustments */
  @media (prefers-color-scheme: dark) {
    .footer-bg {
      filter: brightness(0.8);
    }
  }

  /* Print styles */
  @media print {
    .footer-bg {
      background: #333 !important;
      color: white !important;
    }

    .social-icon {
      display: none;
    }
  }
</style>
