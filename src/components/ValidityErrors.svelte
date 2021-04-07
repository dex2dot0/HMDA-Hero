<!--
    This component is used to provide direct links to regulatory references for various data points.
    Import the component and override the regUrl to point to a specific https://www.consumerfinance.gov/rules-policy/regulations/1003/4/
    reference
-->
<script>
    export let errors = null;
</script>

<style>
    .errors {
        color: #8764b8;
    }
</style>

{#if Number(errors)>0}
    <a href="#" class="badge badge-danger">
        {errors}
        <span class="material-icons">
            gpp_maybe
        </span>
    </a>
{:else}
<a href="#" class="badge badge-success">
    <span class="material-icons">
        gpp_good
    </span>
</a>
{/if}

