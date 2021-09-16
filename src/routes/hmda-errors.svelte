<script>
	import { parseErrors, formatErrors, validityErrors, qualityErrors } from '../stores';
	import { onMount } from 'svelte';

	import FormattingErrors from '../components/HMDA Errors/FormattingErrors.svelte';
	import ParsingErrors from '../components/HMDA Errors/ParsingErrors.svelte';
	import ValidityErrors from '../components/HMDA Errors/ValidityErrors.svelte';
	import QualityErrors from '../components/HMDA Errors/QualityErrors.svelte';

	//Disabled a tag routing so scrollspy can work properly
	onMount(() => {
		document.querySelectorAll('a').forEach((a) => {
			if (!a.hash || !document.querySelectorAll(a.hash).length) {
				return;
			}
			a.href = window.location + a.hash;
		});
	});
</script>

<style>
	.errorContainer {
		width: '98vw';
		background-color: #faf9f8;
	}

	.innerContainer {
		max-width: '95%';
		margin: auto;
	}

	@media (min-width: 576px) {
		.innerContainer {
			max-width: 95%;
		}
	}

	@media (min-width: 768px) {
		.innerContainer {
			max-width: 90%;
		}
	}

	@media (min-width: 992px) {
		.innerContainer {
			max-width: 85%;
		}
	}

	@media (min-width: 1200px) {
		.innerContainer {
			max-width: 80%;
		}
	}

	.header {
		padding: 0;
		padding-left: 10px;
		padding-right: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
	}

	span {
		color: #212529;
		margin-left: 1em;
	}

	.card {
		width: 100%;
	}

	.nav-link {
		color: #212529;
	}

	.nav-link:hover {
		color: #4e9668;
	}

	.badge-success {
		background-color: #4e9668;
	}
</style>

<div class="errorContainer">
	<div class="innerContainer">
		<form class="shadow-sm px-3 py-2 bg-white rounded">
			<div class="header">
				<h3 style="text-align: center">HMDA ERRORS</h3>
			</div>
			<div>
				<div class="card">
					<nav id="errors-navbar" class="navbar bg-white">
						<ul class="nav nav-pills">
							<li class="nav-item">
								<a class="nav-link" href="#format"
									>Formatting Errors
									<span
										class={$formatErrors.length > 0
											? 'badge badge-danger'
											: 'badge badge-success'}>{$formatErrors.length || 0}</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#parse"
									>Parsing Errors
									<span
										class={$parseErrors.length > 0
											? 'badge badge-danger'
											: 'badge badge-success'}>{$parseErrors.length || 0}</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#validity"
									>Validity Errors
									<span
										class={$validityErrors.length > 0
											? 'badge badge-danger'
											: 'badge badge-success'}>{$validityErrors.length || 0}</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#quality"
									>Quality Errors
									<span
										class={$qualityErrors.length > 0
											? 'badge badge-danger'
											: 'badge badge-success'}>{$qualityErrors.length || 0}</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div data-spy="scroll" data-target="#errors-navbar" data-offset="0">
				<!-- FORMATTING ERRORS -->
				<div class="card" id="format" bg-white>
					<div
						class={$formatErrors.length > 0
							? 'alert alert-warning'
							: 'alert alert-success'}
						role="alert">
						<h5 class="mb-0">
							File Formatting Errors
							<span
								class={$formatErrors.length > 0
									? 'badge badge-danger'
									: 'badge badge-success'}>{$formatErrors.length || 0}</span>
						</h5>
					</div>
					<FormattingErrors formatErrors={$formatErrors} />
				</div>
				<!-- PARSING ERRORS -->
				<div class="card" id="parse">
					<div
						class={$parseErrors.length > 0
							? 'alert alert-warning'
							: 'alert alert-success'}
						role="alert">
						<h5>
							Parsing Errors
							<span
								class={$parseErrors.length > 0
									? 'badge badge-danger'
									: 'badge badge-success'}>{$parseErrors.length || 0}</span>
						</h5>
					</div>
					{#if $parseErrors.length > 0}
						<ParsingErrors parseErrors={$parseErrors} />
					{/if}
				</div>
				<!-- VALIDITY ERRORS -->
				<div class="card" id="validity">
					<div
						class={$validityErrors.length > 0
							? 'alert alert-warning'
							: 'alert alert-success'}
						role="alert">
						<h5>
							Validity Errors
							<span
								class={$validityErrors.length > 0
									? 'badge badge-danger'
									: 'badge badge-success'}>{$validityErrors.length || 0}</span>
						</h5>
					</div>
					<ValidityErrors validityErrors={$validityErrors} />
				</div>
				<!-- QUALITY ERRORS -->
				<div class="card" id="quality">
					<div
						class={$qualityErrors.length > 0
							? 'alert alert-warning'
							: 'alert alert-success'}
						role="alert">
						<h5>
							Quality Errors
							<span
								class={$qualityErrors.length > 0
									? 'badge badge-danger'
									: 'badge badge-success'}>{$qualityErrors.length || 0}</span>
						</h5>
					</div>
					<QualityErrors qualityErrors={$qualityErrors} />
				</div>
			</div>
		</form>
	</div>
</div>
