<script>
    import {
        submissionOfApplication
    } from "./../../stores.js";
</script>

<label for="submissionOfApplication">Submission of Application</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$submissionOfApplication > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="submissionOfApplication"
  bind:value={$submissionOfApplication}
  on:change={submissionOfApplication.change}
  required>
  <option />
  <option value="1">1.Submitted directly to your institution</option>
  <option value="2">2.Not submitted directly to your institution</option>
  <option value="3">3.Not applicable</option>
  <option value="1111">1111.Exempt</option>
</select>