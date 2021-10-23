<style>
	.about {
		text-align: center;
		max-width: 90%;
	}

	@media (min-width: 576px) {
		.about {
			max-width: 90%;
		}
	}

	@media (min-width: 768px) {
		.about {
			max-width: 80%;
		}
	}

	@media (min-width: 992px) {
		.about {
			max-width: 70%;
		}
	}

	@media (min-width: 1200px) {
		.about {
			max-width: 60%;
		}
	}

	/* a {
    color: #4e9668;
  } */
</style>

<svelte:head>
	<title>About</title>
</svelte:head>
<div class="about container">
	<h1>Why HMDA Hero</h1>
	<h5>
		Fast <i class="material-icons" style="font-size: 1.1rem; width: 1rem;">
			offline_bolt
		</i>
		Light-weight
		<i class="material-icons" style="font-size: 1.1rem; width: 1rem;"> cloud_queue </i>
		Powerful
		<i class="material-icons" style="font-size: 1.1rem; width: 1rem;">
			battery_charging_full
		</i>
		And Free
		<i class="material-icons" style="font-size: 1.1rem; width: 1rem;"> favorite </i>
	</h5>
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
		community, though that is not a requirement.
	</p>
</div>
