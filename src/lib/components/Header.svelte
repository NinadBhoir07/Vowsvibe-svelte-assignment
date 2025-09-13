<script>
  import { isDropdownOpen } from "../stores/app.js";

  let mobileMenuOpen = false;
  let ayurvedaDropdownOpen = false;
  let yogasutrasDropdownOpen = false;
  let upanishadsDropdownOpen = false;
  let sanskritDropdownOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    // Close all dropdowns when mobile menu is toggled
    if (mobileMenuOpen) {
      closeAllDropdowns();
    }
  }

  function toggleDropdown(dropdown) {
    // Close all dropdowns first
    ayurvedaDropdownOpen = false;
    yogasutrasDropdownOpen = false;
    upanishadsDropdownOpen = false;
    sanskritDropdownOpen = false;

    // Open the selected dropdown
    if (dropdown === "ayurveda") ayurvedaDropdownOpen = true;
    if (dropdown === "yogasutras") yogasutrasDropdownOpen = true;
    if (dropdown === "upanishads") upanishadsDropdownOpen = true;
    if (dropdown === "sanskrit") sanskritDropdownOpen = true;
  }

  function closeAllDropdowns() {
    ayurvedaDropdownOpen = false;
    yogasutrasDropdownOpen = false;
    upanishadsDropdownOpen = false;
    sanskritDropdownOpen = false;
  }

  function handleSearch() {
    console.log("Search clicked");
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
    closeAllDropdowns();
  }
</script>

<header class="bg-white shadow-md sticky top-0 z-50">
  <nav class="w-full">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 md:h-20 lg:h-24">
        <!-- Logo -->
        <div class="flex-shrink-0 z-50">
          <a
            href="#"
            on:click={() => window.location.reload()}
            class="flex items-center"
          >
            <img
              src="images/logo.png"
              alt="Sanskrit Logo"
              class="h-8 w-auto sm:h-10 md:h-12 lg:h-14"
            />
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden xl:block">
          <div class="flex items-center space-x-2 2xl:space-x-4">
            <!-- Search Icon -->
            <a
              href="#"
              on:click={handleSearch}
              class="text-gray-700 hover:text-red-600 transition-colors duration-300 px-2 py-2"
            >
              <i class="fa fa-search text-lg"></i>
            </a>

            <!-- ĀYURVEDA Dropdown -->
            <div
              class="relative"
              on:mouseenter={() => toggleDropdown("ayurveda")}
              on:mouseleave={closeAllDropdowns}
            >
              <a
                href="#"
                class="text-gray-700 hover:text-red-600 font-medium px-2 py-2 text-lg xl:text-lg 2xl:text-lg uppercase tracking-wide transition-colors duration-300 flex items-center"
              >
                ĀYURVEDA
                <svg
                  class="ml-1 h-3 w-3 xl:h-4 xl:w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
              <div
                class="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-300 {ayurvedaDropdownOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'}"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Introduction</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Timing</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Food</a
                >
              </div>
            </div>

            <!-- YOGASŪTRAS Dropdown -->
            <div
              class="relative"
              on:mouseenter={() => toggleDropdown("yogasutras")}
              on:mouseleave={closeAllDropdowns}
            >
              <a
                href="#"
                class="text-gray-700 hover:text-red-600 font-medium px-2 py-2 text-lg xl:text-lg 2xl:text-lg uppercase tracking-wide transition-colors duration-300 flex items-center"
              >
                YOGASŪTRAS
                <svg
                  class="ml-1 h-3 w-3 xl:h-4 xl:w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
              <div
                class="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-300 {yogasutrasDropdownOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'}"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Introduction</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Obstacles</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Practices</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Yogāsana</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Glossary</a
                >
              </div>
            </div>

            <!-- BHAGAVAD GĪTĀ -->
            <a
              href="#"
              class="text-gray-700 hover:text-red-600 font-medium px-2 py-2 text-lg xl:text-lg 2xl:text-lg uppercase tracking-wide transition-colors duration-300"
              >BHAGAVAD GĪTĀ</a
            >

            <!-- UPANIṢADS Dropdown -->
            <div
              class="relative"
              on:mouseenter={() => toggleDropdown("upanishads")}
              on:mouseleave={closeAllDropdowns}
            >
              <a
                href="#"
                class="text-gray-700 hover:text-red-600 font-medium px-2 py-2 text-lg xl:text-lg 2xl:text-lg uppercase tracking-wide transition-colors duration-300 flex items-center"
              >
                UPANIṢADS
                <svg
                  class="ml-1 h-3 w-3 xl:h-4 xl:w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
              <div
                class="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-300 {upanishadsDropdownOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'}"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >ĪŚOPANIṢAD</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >TAITTIRĪYOPANIṢAD</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >MĀṆḌŪKYOPANIṢAD</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >KENOPANIṢAD</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:textlg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >KAṬHOPANIṢAD</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >AITAREYOPANIṢAD</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >MUṆḌAKOPANIṢAD</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >PRAŚNOPANIṢAD</a
                >
              </div>
            </div>

            <!-- SANSKRIT Dropdown -->
            <div
              class="relative"
              on:mouseenter={() => toggleDropdown("sanskrit")}
              on:mouseleave={closeAllDropdowns}
            >
              <a
                href="#"
                class="text-gray-700 hover:text-red-600 font-medium px-2 py-2 text-lg xl:text-lg 2xl:text-lg uppercase tracking-wide transition-colors duration-300 flex items-center"
              >
                SANSKRIT
                <svg
                  class="ml-1 h-3 w-3 xl:h-4 xl:w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
              <div
                class="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-300 {sanskritDropdownOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'}"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Devotional Songs</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Grammar Songs</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Fun Songs</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-lg xl:text-lg text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Script Songs</a
                >
              </div>
            </div>

            <!-- Contact Us -->
            <a
              href="#"
              class="text-gray-700 hover:text-red-600 font-medium px-2 py-2 text-lg xl:text-lg 2xl:text-lg uppercase tracking-wide transition-colors duration-300"
              >Contact us</a
            >
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="xl:hidden z-50">
          <button
            on:click={toggleMobileMenu}
            class="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600 p-2 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {#if !mobileMenuOpen}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              {:else}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              {/if}
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu overlay -->
      {#if mobileMenuOpen}
        <div
          class="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          on:click={closeMobileMenu}
        ></div>
      {/if}

      <!-- Mobile menu -->
      <div
        class="xl:hidden fixed top-0 right-0 h-full w-80 max-w-full bg-white transform transition-transform duration-300 ease-in-out z-50 {mobileMenuOpen
          ? 'translate-x-0'
          : 'translate-x-full'} overflow-y-auto"
      >
        <div class="flex flex-col h-full">
          <!-- Mobile menu header -->
          <div
            class="flex items-center justify-between p-4 border-b border-gray-200"
          >
            <img src="images/logo.png" alt="Sanskrit Logo" class="h-8 w-auto" />
            <button
              on:click={closeMobileMenu}
              class="text-gray-700 hover:text-red-600 p-2"
              aria-label="Close mobile menu"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <!-- Mobile menu content -->
          <div class="flex-1 px-4 py-6 space-y-6">
            <!-- Search -->
            <a
              href="#"
              on:click={handleSearch}
              class="flex items-center px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors duration-300"
            >
              <i class="fa fa-search mr-3 text-lg"></i>
              <span class="text-lg font-medium">Search</span>
            </a>

            <!-- ĀYURVEDA Dropdown -->
            <div class="space-y-2">
              <button
                on:click={() => (ayurvedaDropdownOpen = !ayurvedaDropdownOpen)}
                class="flex justify-between items-center w-full px-3 py-3 text-left text-gray-700 hover:text-red-600 hover:bg-gray-50 font-medium text-lg uppercase tracking-wide rounded-lg transition-colors duration-300"
              >
                ĀYURVEDA
                <svg
                  class="h-5 w-5 transform {ayurvedaDropdownOpen
                    ? 'rotate-180'
                    : ''} transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {#if ayurvedaDropdownOpen}
                <div class="pl-6 space-y-2 border-l-2 border-gray-200 ml-3">
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>Introduction</a
                  >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>Timing</a
                  >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>Food</a
                  >
                </div>
              {/if}
            </div>

            <!-- YOGASŪTRAS Dropdown -->
            <div class="space-y-2">
              <button
                on:click={() =>
                  (yogasutrasDropdownOpen = !yogasutrasDropdownOpen)}
                class="flex justify-between items-center w-full px-3 py-3 text-left text-gray-700 hover:text-red-600 hover:bg-gray-50 font-medium text-lg uppercase tracking-wide rounded-lg transition-colors duration-300"
              >
                YOGASŪTRAS
                <svg
                  class="h-5 w-5 transform {yogasutrasDropdownOpen
                    ? 'rotate-180'
                    : ''} transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {#if yogasutrasDropdownOpen}
                <div class="pl-6 space-y-2 border-l-2 border-gray-200 ml-3">
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>Introduction</a
                  >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>Obstacles</a
                  >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>Practices</a
                  >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>Yogāsana</a
                  >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>Glossary</a
                  >
                </div>
              {/if}
            </div>

            <!-- BHAGAVAD GĪTĀ -->
            <a
              href="#"
              class="block px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 font-medium text-lg uppercase tracking-wide rounded-lg transition-colors duration-300"
              on:click={closeMobileMenu}>BHAGAVAD GĪTĀ</a
            >

            <!-- UPANIṢADS Dropdown -->
            <div class="space-y-2">
              <button
                on:click={() =>
                  (upanishadsDropdownOpen = !upanishadsDropdownOpen)}
                class="flex justify-between items-center w-full px-3 py-3 text-left text-gray-700 hover:text-red-600 hover:bg-gray-50 font-medium text-lg uppercase tracking-wide rounded-lg transition-colors duration-300"
              >
                UPANIṢADS
                <svg
                  class="h-5 w-5 transform {upanishadsDropdownOpen
                    ? 'rotate-180'
                    : ''} transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {#if upanishadsDropdownOpen}
                <div
                  class="pl-6 space-y-2 border-l-2 border-gray-200 ml-3 max-h-48 overflow-y-auto"
                >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>ĪŚOPANIṢAD</a
                  >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>TAITTIRĪYOPANIṢAD</a
                  >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>MĀṆḌŪKYOPANIṢAD</a
                  >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>KENOPANIṢAD</a
                  >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>KAṬHOPANIṢAD</a
                  >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>AITAREYOPANIṢAD</a
                  >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>MUṆḌAKOPANIṢAD</a
                  >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>PRAŚNOPANIṢAD</a
                  >
                </div>
              {/if}
            </div>

            <!-- SANSKRIT Dropdown -->
            <div class="space-y-2">
              <button
                on:click={() => (sanskritDropdownOpen = !sanskritDropdownOpen)}
                class="flex justify-between items-center w-full px-3 py-3 text-left text-gray-700 hover:text-red-600 hover:bg-gray-50 font-medium text-lg uppercase tracking-wide rounded-lg transition-colors duration-300"
              >
                SANSKRIT
                <svg
                  class="h-5 w-5 transform {sanskritDropdownOpen
                    ? 'rotate-180'
                    : ''} transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {#if sanskritDropdownOpen}
                <div class="pl-6 space-y-2 border-l-2 border-gray-200 ml-3">
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>Devotional Songs</a
                  >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>Grammar Songs</a
                  >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>Fun Songs</a
                  >
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded transition-colors duration-300"
                    on:click={closeMobileMenu}>Script Songs</a
                  >
                </div>
              {/if}
            </div>

            <!-- Contact Us -->
            <a
              href="#"
              class="block px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 font-medium text-lg uppercase tracking-wide rounded-lg transition-colors duration-300"
              on:click={closeMobileMenu}>Contact us</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
