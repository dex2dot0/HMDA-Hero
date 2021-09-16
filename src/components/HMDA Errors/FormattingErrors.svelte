<script>
	export let formatErrors;
</script>

{#if formatErrors.length > 0}
	<ul class="list-group">
		{#each formatErrors as error}
			<li class="list-group-item">
				<h6><strong>Edit Name: {error.editName}</strong></h6>
				<h6>Edit Description {error.editDescription}</h6>
			</li>
		{/each}
	</ul>
{/if}
