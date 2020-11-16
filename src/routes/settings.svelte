<script>
  import { isExempt, LEI } from "../stores.js";
</script>

<style>
  .container {
    padding: 20px;
  }
</style>

<div class="container">
  <div class="row ml-4">
    <div class="d-flex align-items-end">
      <h6 style="color: #217346;">Apply S2155 Exemption</h6>
    </div>
    <!-- ml-auto is used to push the div all the way to the left -->
    <div class="d-flex ml-auto pr-1">
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label
          class={$isExempt === true ? 'btn btn-secondary active' : 'btn btn-outline-secondary'}
          on:click={() => {
            $isExempt === false ? isExempt.set(true) : isExempt.set(false);
          }}>
          <input type="radio" name="options" id="option1" autocomplete="off" />
          On
        </label>
        <label
          class={$isExempt === true ? 'btn btn-outline-secondary' : 'btn btn-secondary active'}
          on:click={() => {
            $isExempt === false ? isExempt.set(true) : isExempt.set(false);
          }}>
          <input type="radio" name="options" id="option2" autocomplete="off" />
          Off
        </label>
      </div>
    </div>
  </div>
  <div class="row ml-4 pt-3 d-flex">
    <div class="d-flex align-items-end">
      <h6 style="color: #217346;">LEI</h6>
    </div>
    <!-- ml-auto is used to push the div all the way to the left -->
    <div class="d-flex ml-auto pr-1">
      <button type="button" class="btn btn-sm btn-outline-secondary">
        Get from Excel
      </button>
    </div>
  </div>
  <div class="row ml-4 pt-2">
    <input class="form-control mr-sm-2" type="text" bind:value={$LEI} />
  </div>
</div>
