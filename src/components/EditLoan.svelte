<script>
  import { onDestroy } from "svelte";
  //Load data from excel, if data does not exist, flip to AddLoan

  //How does the loan get identified? Has to be disconnected from current somehow
  onDestroy(() => {
    //Commit changes to excel
  });
</script>
