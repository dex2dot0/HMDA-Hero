<script>
  import { createEventDispatcher } from "svelte";
  export let value;
  export let text = "NA";

  const dispatch = createEventDispatcher();
</script>

<style>
  /* The container */
  .container {
    max-width: 60px;
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    font-size: 12px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-right: 0;
    padding-right: 0;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #f3f2f1;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #217346;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 8px;
    top: 6px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  span {
    border: #217346 1px solid;
  }
</style>

<!-- svelte-ignore a11y-label-has-associated-control-->
<label class="container">
  {text}
  {#if value}
    <input
      type="checkbox"
      checked="checked"
      tabindex="-1"
      on:click={() => {
        value === true ? (value = false) : (value = true);
        dispatch('notify', value);
      }} />
  {:else}
    <input
      type="checkbox"
      tabindex="-1"
      on:click={() => {
        value === true ? (value = false) : (value = true);
        dispatch('notify', value);
      }} />
  {/if}
  <span class="checkmark" tabindex="-1" />
</label>
