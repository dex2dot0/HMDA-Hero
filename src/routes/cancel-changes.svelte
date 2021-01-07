<script>
  //OfficeJS does not have a method to close the add-in taskbar so this will have to do for now.
  //On cancelling changes to adding a loan, will just cancel changes and redirect to this page
</script>

<style>
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.5em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
    color: #5a6268;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Cancel Changes</title>
</svelte:head>

<div class="container">
  <h1>Changes Cancelled</h1>
  <p>You can now safely close out of this window</p>
</div>
