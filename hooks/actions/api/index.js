import useDomain from "../domain";

export const useDealerData = async () => {
  const domain = useDomain();
  let baseUrl = process.env.base_url;
  let baseImageUrl = process.env.base_image_url;
  let baseSpecialImageUrl = process.env.base_special_image_url;

  let timeWork = await fetch(
    `${baseUrl}/api/dealership/timework/get/${domain}`,
    { next: { revalidate: 3600 } }
  ).then((data) => data.json());

  let data = await fetch(`${baseUrl}/api/dealership/single/by/url/${domain}`, {
    next: { revalidate: 3600 },
  }).then((data) => data.json());

  return {
    domain,
    baseUrl,
    baseImageUrl,
    baseSpecialImageUrl,
    dealerData: {
      ...data,
      timeWork,
      domain,
    },
  };
};
