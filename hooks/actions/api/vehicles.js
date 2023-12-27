export const useVehicles = async (url, data) => {
  // let vehicles = await fetch(url, { next: { revalidate: 0 } }).then((data) =>
  //   data.json()
  // );
  let vehicles = await fetch(url, data).then((data) => data.json());
  return vehicles;
};
