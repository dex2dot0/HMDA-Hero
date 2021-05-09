<script>
  import { createEventDispatcher } from 'svelte';
  export let value;
  export let text = 'NA';

  const dispatch = createEventDispatcher();
</script>

<button
  tabindex="-1"
  type="button"
  class="badge badge-light"
  on:click="{() => {
    value === true ? (value = false) : (value = true);
    dispatch('notify', value);
  }}">
  {#if value}
    <span class="material-icons"> check_box </span>
  {:else}
    <span class="material-icons"> check_box_outline_blank </span>
  {/if}
  {text}
</button>
