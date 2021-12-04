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
	button {
		margin: 20px;
		width: 100%;
	}
</style>

<svelte:head>
	<title>About</title>
</svelte:head>
<form class="shadow-sm mb-5 bg-white rounded">
	<nav class="navbar navbar-expand-lg navbar-dark align-items-center">
		<div class="navbar-brand">
			<h3 class="pr-3 pl-3">About</h3>
		</div>
	</nav>
	<a
		href="https://www.hmdahero.com/docs/"
		target="_blank"
		class="badge badge-light"
		tabindex="-1">
		<button type="button" class="btn btn-secondary btn-lg btn-block btn-small"
			>Click here to open the documentation pages</button>
	</a>
</form>
