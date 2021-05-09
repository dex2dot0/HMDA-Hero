<style>
  main {
    position: relative;
    background-color: white;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<svelte:head>
  <script type="text/javascript">
    //Must initialize Office.js on each new page
    (() => {
      Office.initialize = function () {};
    })();
  </script>
</svelte:head>

<main>
  <div class="d-flex">
    <div class="flex-grow-1">
      <slot />
    </div>
  </div>
</main>
