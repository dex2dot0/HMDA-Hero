<!--
    This component is used to provide immediate soft feedback regarding the validity of the data point. 
    For example, if the data point requires a certain formatting, certain # of characters, etc. and the underlying component
    does not already have a validation component tied to it provided directly by Bootstrap, this component can be used
    to provide the same effect. 
-->
<script>
  export let isValid = false;
  export let isWarning = false;
</script>

<style>
  hr {
    margin-top: -0.2rem;
    margin-bottom: 0.1rem;
  }
  .is-valid {
    border-top: 3px solid #28a745;
  }
  .is-invalid {
    border-top: 3px solid #dc3545;
  }

  .is-warning {
    border-top: 3px solid #ffaa44;
  }
</style>

{#if isValid}
  <hr class="is-valid" />
{:else if isWarning}
  <hr class="is-warning" />
{:else}
  <hr class="is-invalid" />
{/if}
