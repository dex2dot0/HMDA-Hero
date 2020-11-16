<script>
  export let isValid = false;
</script>

<style>
  hr {
    margin-top: -0.2rem;
    margin-bottom: 0.1rem;
  }
  .is-valid {
    border-top: 2px solid #28a745;
  }
  .is-invalid {
    border-top: 2px solid #dc3545;
  }
</style>

{#if isValid}
  <hr class="is-valid" />
{:else}
  <hr class="is-invalid" />
{/if}
