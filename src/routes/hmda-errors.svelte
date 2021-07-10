<script>
	import { parseErrors, formatErrors, validityErrors, qualityErrors } from '../stores';
	console.log($parseErrors, $formatErrors, $validityErrors, $qualityErrors);
</script>

<style>
	nav {
		padding: 0;
	}

	nav {
		border-top-left-radius: 12px;
		border-top-right-radius: 12px;
		padding-left: 10px;
		padding-right: 10px;
		background-color: #323130;
		min-height: 50px;
	}

	h3 {
		width: 100%;
		color: #4e9668;
		text-align: center;
	}

	.input {
		color: #ffc107;
	}

	.valid {
		color: #217346;
	}

	span {
		color: #212529;
	}
</style>

<form class="shadow-sm m-2 bg-white rounded">
	<nav class="navbar navbar-expand-lg navbar-dark align-items-center pb-1">
		<h3 class="pr-3 pl-3">HMDA ERRORS</h3>
	</nav>
	{#if $formatErrors.length && $formatErrors.length > 0}
		{#each $formatErrors as error}
			<h5>File Formatting Errors</h5>
			<h6><strong>Edit Name: {error.editName}</strong></h6>
			<h6>Edit Description {error.editDescription}</h6>
		{/each}
	{/if}
	{#if $parseErrors.length && $parseErrors.length > 0}
		{#each $parseErrors as error}
			<h4>Row: {error.rowNumber}</h4>
			<h5>Estimated ULI: {error.estimatedULI}</h5>
			{#each error.errorMessages as messages}
				<p>Field: {messages.fieldName}</p>
				-
				<p class="input">
					Input:
					<span>{messages.inputValue}</span>
				</p>
				<p class="valid">
					Valid Input:
					<span>{messages.validValues}</span>
				</p>
			{/each}
		{/each}
	{/if}
	{#if $validityErrors.length && $validityErrors.length > 0}
		{#each $validityErrors as error}
			<p>{JSON.stringify(error)}</p>
		{/each}
	{/if}
	{#if $qualityErrors.length && $qualityErrors.length > 0}
		{#each $qualityErrors as error}
			<p>{JSON.stringify(error)}</p>
		{/each}
	{/if}
</form>
