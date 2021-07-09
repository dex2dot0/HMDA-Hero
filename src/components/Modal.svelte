<script>
	export let idName;
	export let modalTitle;
	export let modalBody;
</script>

<a
	href="#{idName}"
	class="badge badge-info"
	data-toggle="modal"
	tabindex="-1"
	data-target="#{idName}">
	<span class="material-icons"> info </span>
</a>
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
				<button type="button" class="btn btn-secondary" data-dismiss="modal">
					Close
				</button>
			</div>
		</div>
	</div>
</div>
