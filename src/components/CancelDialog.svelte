<script>
  import ContinueButton from "./ContinueButton.svelte";
  import CancelButton from "./CancelButton.svelte";
  export let idName;
  export let modalTitle;
  export let modalBody;
  export let isDisabled = true;
</script>

<style>
  .btn-sm {
    border-color: #4e9668;
    color: #fff;
    margin-left: 10px;
  }

  .btn-sm:hover {
    background-color: #5a6268;
    color: #fff;
  }
</style>

<button
type="button"
class="btn btn-sm"
data-toggle="modal"
tabindex="-1"
data-target="#{idName}"
>CANCEL
</button>

<!-- Modal -->
<div
  class="modal fade"
  id={idName}
  role="dialog"
  aria-labelledby={idName}
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h6 class="modal-title">{modalTitle}</h6>
      </div>
      <div class="modal-body">
        {@html modalBody}
      </div>
      <div class="modal-footer">
        <ContinueButton />
        <CancelButton />
      </div>
    </div>
  </div>
</div>
