<script>
  export let query;
  let matches;
  let mediaQueryList;

  function handleChange(e) {
    matches = mediaQueryList.matches;
  }

  m: {
    if (mediaQueryList) mediaQueryList.removeListener(handleChange);
    mediaQueryList = window.matchMedia(query);
    mediaQueryList.addListener(handleChange);

    handleChange(mediaQueryList);
  }
</script>

<slot {matches} />
