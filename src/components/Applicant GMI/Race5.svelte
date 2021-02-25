<script>
    import {
      applicantRace5
    } from "./../../stores.js";
</script>

<label for="Race5">Race 5</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class="custom-select"
  id="Race5"
  bind:value={$applicantRace5}
  on:change={applicantRace5.change}>
  <option selected value="">Blank, If none are applicable</option>
  <option value="1">1. American Indian or Alaska Native</option>
  <option value="2">2. Asian</option>
  <option value="21">21. Asian Indian</option>
  <option value="22">22. Chinese</option>
  <option value="23">23. Filipino</option>
  <option value="24">24. Japanese</option>
  <option value="25">25. Korean</option>
  <option value="26">26. Vietnamese</option>
  <option value="27">27. Other Asian</option>
  <option value="3">3. Black or African American</option>
  <option value="4">4. Native Hawaiian or Other Pacific Islander</option>
  <option value="41">41. Native Hawaiian</option>
  <option value="42">42. Guamanian or Chamorro</option>
  <option value="43">43. Samoan</option>
  <option value="44">44. Other Pacific Islander</option>
  <option value="5">5. White</option>
</select>