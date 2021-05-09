<script>
  import ApplicantGMI from '../components/Applicant GMI/ApplicantGMI.svelte';
  import CoApplicantGMI from '../components/CoApplicant GMI/CoApplicantGMI.svelte';
  let show = 'app';
</script>

<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label
    for="option1"
    class="{show === 'app'
      ? 'btn btn-secondary active'
      : 'btn btn-outline-secondary'}"
    on:click="{() => {
      show === 'app' ? (show = 'coapp') : (show = 'app');
    }}">
    <input type="radio" name="options" id="option1" autocomplete="off" />
    Applicant
  </label>
  <label
    for="option2"
    class="{show === 'app'
      ? 'btn btn-outline-secondary'
      : 'btn btn-secondary active'}"
    on:click="{() => {
      show === 'app' ? (show = 'coapp') : (show = 'app');
    }}">
    <input type="radio" name="options" id="option2" autocomplete="off" />
    Co-Applicant
  </label>
</div>

{#if show === 'app'}
  <ApplicantGMI />
{/if}

{#if show === 'coapp'}
  <CoApplicantGMI />
{/if}
