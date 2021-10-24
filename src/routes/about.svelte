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

  p {
	  margin-left: 40px;
	  margin-right: 40px;
	  padding-top: 10px;
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
	<p>
		HMDA Hero is a free resource provided to assist with the arduous process of compiling
		HMDA data. While there are a number of excellent tools available on the market for
		HMDA compliation, they may be too costly or complicated for smaller organizations,
		especially for companies that only file a small set of HMDA data. HMDA Hero is
		designed with that in mind and aims to be a lightweight solution that can carry some
		of the burden.
	</p>
	<p>
		HMDA Hero is also entirely open sourced under an MIT license. As a result, anyone is
		free to modify and extend the underlying source code to fit their needs and/or provide
		additional functionality as they may see fit. In fact, its encouraged. All that we'd
		personally ask is that if at all possible, any enhancements be shared with the broader
		community, though that is not a requirement and we respect your decision either way.
	</p>
</form>
