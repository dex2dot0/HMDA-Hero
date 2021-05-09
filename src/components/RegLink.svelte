<!--
    This component is used to provide direct links to regulatory references for various data points.
    Import the component and override the regUrl to point to a specific https://www.consumerfinance.gov/rules-policy/regulations/1003/4/
    reference
-->
<script>
  export let regUrl = '';
</script>

<style>
  a {
    color: #8764b8;
  }
  a:hover {
    color: #5c2e91;
  }
</style>

<a href="{regUrl}" target="_blank" class="badge badge-light" tabindex="-1">
  <span class="material-icons"> account_balance </span>
</a>
