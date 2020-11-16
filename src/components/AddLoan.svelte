<script>
  import { onDestroy } from "svelte";
  import { ULI } from "../stores.js";
  onDestroy(() => {
    //Commit changes to excel file
    console.log($ULI);
  });
</script>
