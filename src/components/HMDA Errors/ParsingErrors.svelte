<script>
	export let parseErrors;
</script>

<style>
	.valid {
		color: #217346;
	}
</style>

<ul class="list-group">
	{#each parseErrors as error, index}
		<li class="list-group-item">
			<div class="card">
				<h6 class="card-header">
					Finding # {index + 1}
				</h6>
				<div class="card-body">
					<h4>Row: {error.rowNumber}</h4>
					<h5>ULI: {error.estimatedULI}</h5>
					{#each error.errorMessages as messages}
						<p>Field: {messages.fieldName}</p>
						<p class="input">
							Input:
							<span>{messages.inputValue}</span>
						</p>
						<p class="valid">
							Valid Input:
							<span>{messages.validValues}</span>
						</p>
					{/each}
				</div>
			</div>
		</li>
	{/each}
</ul>
