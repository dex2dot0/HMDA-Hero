import { readable } from 'svelte/store';

function media(query) {
  const mediaQueryList = window.matchMedia(query);

  const mediaStore = readable(mediaQueryList.matches, (set) => {
    const handleChange = () => set(mediaQueryList.matches);

    mediaQueryList.addListener(handleChange);

    return () => mediaQueryList.removeListener(handleChange);
  });

  return mediaStore;
}

export default media;
