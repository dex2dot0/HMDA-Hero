<style>
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
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
  <title>HMDA Hero</title>
</svelte:head>

<div class="container">
  <h1>HMDA Hero</h1>
  <p>HMDA Is Hard. Let HMDA Hero Carry Some Burden!</p>
  <a href="/add-loan" hidden>Loan</a>
  <a href="/edit-loan" hidden>Edit Loan</a>
  <a href="/features" hidden>Features</a>
  <a href="/about" hidden>About</a>
  <a href="/edit-search" hidden>Edit Search</a>
  <a href="/lei-from-excel" hidden>LEI from Excel Error</a>
  <a href="/import" hidden>Import</a>
  <a href="/resources" hidden>Resources</a>
  <a href="/export" hidden>export</a>
</div>
