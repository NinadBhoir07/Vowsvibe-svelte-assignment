<script>
  export let message = "Loading...";
  export let size = "medium"; // small, medium, large

  $: spinnerSize =
    size === "small" ? "w-6 h-6" : size === "large" ? "w-16 h-16" : "w-10 h-10";
</script>

<div class="flex flex-col items-center justify-center p-8">
  <div class="relative">
    <div
      class="{spinnerSize} border-4 border-gray-200 border-t-red-600 rounded-full animate-spin"
    ></div>
  </div>
  <p class="mt-4 text-gray-600 font-medium">{message}</p>
</div>
