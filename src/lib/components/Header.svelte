<script>
  import { isDropdownOpen } from "../stores/app.js";

  let mobileMenuOpen = false;
  let ayurvedaDropdownOpen = false;
  let yogasutrasDropdownOpen = false;
  let upanishadsDropdownOpen = false;
  let sanskritDropdownOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
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
</script>

<header class="bg-white flex items-center justify-between shadow-md h-32">
  <nav class="w-full">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a
            href="#"
            on:click={() => window.location.reload()}
            class="flex items-center"
          >
            <img
              src="images/logo.png"
              alt="Sanskrit Logo"
              class="h-12 w-auto"
            />
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:block">
          <div class="flex items-center space-x-4">
            <!-- Search Icon -->
            <a
              href="#"
              on:click={handleSearch}
              class="text-gray-700 hover:text-red-600 transition-colors duration-300 px-3 py-2"
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
                class="text-gray-700 hover:text-red-600 font-medium px-3 py-2 text-2xl uppercase tracking-wide transition-colors duration-300 flex items-center"
              >
                ĀYURVEDA
                <svg
                  class="ml-1 h-4 w-4"
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
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Introduction</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Timing</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
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
                class="text-gray-700 hover:text-red-600 font-medium px-3 py-2 text-2xl uppercase tracking-wide transition-colors duration-300 flex items-center"
              >
                YOGASŪTRAS
                <svg
                  class="ml-1 h-4 w-4"
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
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Introduction</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Obstacles</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Practices</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Yogāsana</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Glossary</a
                >
              </div>
            </div>

            <!-- BHAGAVAD GĪTĀ -->
            <a
              href="#"
              class="text-gray-700 hover:text-red-600 font-medium px-3 py-2 text-2xl uppercase tracking-wide transition-colors duration-300"
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
                class="text-gray-700 hover:text-red-600 font-medium px-3 py-2 text-2xl uppercase tracking-wide transition-colors duration-300 flex items-center"
              >
                UPANIṢADS
                <svg
                  class="ml-1 h-4 w-4"
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
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >ĪŚOPANIṢAD</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >TAITTIRĪYOPANIṢAD</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >MĀṆḌŪKYOPANIṢAD</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >KENOPANIṢAD</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >KAṬHOPANIṢAD</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >AITAREYOPANIṢAD</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >MUṆḌAKOPANIṢAD</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
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
                class="text-gray-700 hover:text-red-600 font-medium px-3 py-2 text-2xl uppercase tracking-wide transition-colors duration-300 flex items-center"
              >
                SANSKRIT
                <svg
                  class="ml-1 h-4 w-4"
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
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Devotional Songs</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Grammar Songs</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Fun Songs</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-300"
                  >Script Songs</a
                >
              </div>
            </div>

            <!-- Contact Us -->
            <a
              href="#"
              class="text-gray-700 hover:text-red-600 font-medium px-3 py-2 text-2xl uppercase tracking-wide transition-colors duration-300"
              >Contact us</a
            >
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button
            on:click={toggleMobileMenu}
            class="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600 p-2"
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

      <!-- Mobile menu -->
      <div class="lg:hidden {mobileMenuOpen ? 'block' : 'hidden'}">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          <a
            href="#"
            on:click={handleSearch}
            class="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors duration-300"
          >
            <i class="fa fa-search mr-2"></i>Search
          </a>

          <div class="space-y-1">
            <div class="px-3 py-2">
              <button
                on:click={() => (ayurvedaDropdownOpen = !ayurvedaDropdownOpen)}
                class="flex justify-between w-full text-left text-gray-700 hover:text-red-600 font-medium text-sm uppercase tracking-wide"
              >
                ĀYURVEDA
                <svg
                  class="h-4 w-4 transform {ayurvedaDropdownOpen
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
                <div class="pl-4 mt-2 space-y-1">
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >Introduction</a
                  >
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >Timing</a
                  >
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >Food</a
                  >
                </div>
              {/if}
            </div>
          </div>

          <div class="space-y-1">
            <div class="px-3 py-2">
              <button
                on:click={() =>
                  (yogasutrasDropdownOpen = !yogasutrasDropdownOpen)}
                class="flex justify-between w-full text-left text-gray-700 hover:text-red-600 font-medium text-sm uppercase tracking-wide"
              >
                YOGASŪTRAS
                <svg
                  class="h-4 w-4 transform {yogasutrasDropdownOpen
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
                <div class="pl-4 mt-2 space-y-1">
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >Introduction</a
                  >
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >Obstacles</a
                  >
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >Practices</a
                  >
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >Yogāsana</a
                  >
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >Glossary</a
                  >
                </div>
              {/if}
            </div>
          </div>

          <a
            href="#"
            class="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium text-sm uppercase tracking-wide"
            >BHAGAVAD GĪTĀ</a
          >

          <div class="space-y-1">
            <div class="px-3 py-2">
              <button
                on:click={() =>
                  (upanishadsDropdownOpen = !upanishadsDropdownOpen)}
                class="flex justify-between w-full text-left text-gray-700 hover:text-red-600 font-medium text-sm uppercase tracking-wide"
              >
                UPANIṢADS
                <svg
                  class="h-4 w-4 transform {upanishadsDropdownOpen
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
                <div class="pl-4 mt-2 space-y-1">
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >ĪŚOPANIṢAD</a
                  >
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >TAITTIRĪYOPANIṢAD</a
                  >
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >MĀṆḌŪKYOPANIṢAD</a
                  >
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >KENOPANIṢAD</a
                  >
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >KAṬHOPANIṢAD</a
                  >
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >AITAREYOPANIṢAD</a
                  >
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >MUṆḌAKOPANIṢAD</a
                  >
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >PRAŚNOPANIṢAD</a
                  >
                </div>
              {/if}
            </div>
          </div>

          <div class="space-y-1">
            <div class="px-3 py-2">
              <button
                on:click={() => (sanskritDropdownOpen = !sanskritDropdownOpen)}
                class="flex justify-between w-full text-left text-gray-700 hover:text-red-600 font-medium text-sm uppercase tracking-wide"
              >
                SANSKRIT
                <svg
                  class="h-4 w-4 transform {sanskritDropdownOpen
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
                <div class="pl-4 mt-2 space-y-1">
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >Devotional Songs</a
                  >
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >Grammar Songs</a
                  >
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >Fun Songs</a
                  >
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 hover:text-red-600"
                    >Script Songs</a
                  >
                </div>
              {/if}
            </div>
          </div>

          <a
            href="#"
            class="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium text-sm uppercase tracking-wide"
            >Contact us</a
          >
        </div>
      </div>
    </div>
  </nav>
</header>
