export const useSliderData = async (url) => {
  let sliders = await fetch(url, { next: { revalidate: 3600 } }).then((data) =>
    data.json()
  );

  return sliders;
};
