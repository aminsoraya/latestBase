export const useVehicles = async (url) => {
  let vehicles = await fetch(url, { next: { revalidate: 3600 } }).then((data) =>
    data.json()
  );

  return vehicles;
};


