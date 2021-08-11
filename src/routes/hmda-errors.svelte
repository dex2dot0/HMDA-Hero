<script>
	import { parseErrors, formatErrors, validityErrors, qualityErrors } from '../stores';
</script>

<style>
	.container {
		text-align: center;
		max-width: 90%;
	}

	@media (min-width: 576px) {
		.container {
			max-width: 90%;
		}
	}

	@media (min-width: 768px) {
		.container {
			max-width: 80%;
		}
	}

	@media (min-width: 992px) {
		.container {
			max-width: 70%;
		}
	}

	@media (min-width: 1200px) {
		.container {
			max-width: 60%;
		}
	}

	.header {
		padding: 0;
		padding-left: 10px;
		padding-right: 10px;
		background-color: #323130;
		padding-top: 5px;
		padding-bottom: 5px;
	}
	h3 {
		color: #4e9668;
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

	.card {
		width: 100%;
	}
</style>

<div class="container">
	<form class="shadow-sm mb-5 bg-white rounded">
		<div class="header">
			<h3>HMDA ERRORS</h3>
		</div>
		<div id="accordion">
			<!-- FORMATTING ERRORS -->
			<div class="card">
				<div class="card-header" id="formattingErrors">
					<h5 class="mb-0">
						<button
							class="btn btn-link"
							data-toggle="collapse"
							data-target="#collapseFormatting"
							aria-expanded="true"
							aria-controls="collapseFormatting">
							File Formatting Errors
							<span class="badge badge-pill badge-primary">{$formatErrors.length}</span>
						</button>
					</h5>
				</div>
				{#if $formatErrors.length > 0}
					<div
						id="collapseFormatting"
						class="collapse show"
						aria-labelledby="formattingErrors"
						data-parent="#accordion">
						<div class="card-body">
							{#each $formatErrors as error}
								<h6><strong>Edit Name: {error.editName}</strong></h6>
								<h6>Edit Description {error.editDescription}</h6>
							{/each}
						</div>
					</div>
				{/if}
			</div>
			<!-- PARSING ERRORS -->
			<div class="card">
				<div class="card-header" id="parsingErrors">
					<h5 class="mb-0">
						<button
							class="btn btn-link"
							data-toggle="collapse"
							data-target="#collapseParsing"
							aria-expanded="true"
							aria-controls="collapseParsing">
							Parsing Errors
							<span class="badge badge-pill badge-primary">{$parseErrors.length}</span>
						</button>
					</h5>
				</div>
				<div
					id="collapseParsing"
					class="collapse show"
					aria-labelledby="parsingErrors"
					data-parent="#accordion">
					<div class="card-body">
						{#each $parseErrors as error}
							<h4>Row: {error.rowNumber}</h4>
							<h5>Estimated ULI: {error.estimatedULI}</h5>
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
						{/each}
					</div>
				</div>
			</div>
			<!-- VALIDITY ERRORS -->
			<div class="card">
				<div class="card-header" id="validityErrors">
					<h5 class="mb-0">
						<button
							class="btn btn-link"
							data-toggle="collapse"
							data-target="#collapseValidity"
							aria-expanded="true"
							aria-controls="collapseValidity">
							Validity Errors
							<span class="badge badge-pill badge-primary">{$validityErrors.length}</span>
						</button>
					</h5>
				</div>
				<div
					id="collapseValidity"
					class="collapse show"
					aria-labelledby="validityErrors"
					data-parent="#accordion">
					<div class="card-body">
						{#each $validityErrors as error}
							<p>{JSON.stringify(error)}</p>
						{/each}
					</div>
				</div>
			</div>
			<!-- QUALITY ERRORS -->
			<div class="card">
				<div class="card-header" id="qualityErrors">
					<h5 class="mb-0">
						<button
							class="btn btn-link"
							data-toggle="collapse"
							data-target="#collapseQuality"
							aria-expanded="true"
							aria-controls="collapseQuality">
							Quality Errors
							<span class="badge badge-pill badge-primary">{$qualityErrors.length}</span>
						</button>
					</h5>
				</div>
				<div
					id="collapseQuality"
					class="collapse show"
					aria-labelledby="qualityErrors"
					data-parent="#accordion">
					<div class="card-body">
						{#each $qualityErrors as error}
							<p>{JSON.stringify(error)}</p>
						{/each}
					</div>
				</div>
			</div>

			<!-- {/if} -->
		</div>
	</form>
</div>
