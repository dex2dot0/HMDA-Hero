<script>
	import { parseErrors, validityErrors, qualityErrors } from '../stores';
	console.log($parseErrors, $validityErrors, $qualityErrors);
</script>

<h1>Welcome to the hmda-errors page!</h1>
{#if $parseErrors.length > 0}
	{#each $parseErrors as error}
		<p>{JSON.stringify(error)}</p>
	{/each}
{/if}
{#if $validityErrors.length > 0}
	{#each $validityErrors as error}
		<p>{JSON.stringify(error)}</p>
	{/each}
{/if}
{#if $qualityErrors.length > 0}
	{#each $qualityErrors as error}
		<p>{JSON.stringify(error)}</p>
	{/each}
{/if}
