<!--
    This component is used to provide direct links to regulatory references for various data points.
    Import the component and override the regUrl to point to a specific https://www.consumerfinance.gov/rules-policy/regulations/1003/4/
    reference
-->
<script>
  export let errors = 0;
  export let idName;
  export let errorsHTML = 'No validity errors found.';
</script>

<a
  href="#{idName}"
  class="{Number(errors) > 0 ? 'badge badge-danger' : 'badge badge-success'}"
  data-toggle="modal"
  tabindex="-1"
  data-target="#{idName}">
  {errors > 0 ? errors : ''}
  <span class="material-icons">
    {Number(errors) > 0 ? 'gpp_maybe' : 'gpp_good'}
  </span>
</a>
<!-- Modal -->
<div
  class="modal fade"
  id="{idName}"
  role="dialog"
  aria-labelledby="{idName}"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h6 class="modal-title">Validity Errors</h6>
      </div>
      <div class="modal-body">
        {@html errorsHTML}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>
