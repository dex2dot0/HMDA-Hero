<script>
    export let idName;
    export let modalTitle;
    export let modalBody;
  </script>
  
  <style>
    .btn-sm {
      line-height: 1;
      border-radius: 180px;
      color: #217346;
      border-color: #217346;
    }
  
    .btn-sm:hover {
      background-color: #5a6268;
      color: #fff;
    }
  </style>
  
  <button
    type="button"
    class="btn btn-sm btn-outline-dark"
    data-toggle="modal"
    tabindex="-1"
    data-target="#{idName}">
    CANCEL
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
            <button type="button" class="btn btn-primary" data-dismiss="modal">
                Continue
              </button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
  