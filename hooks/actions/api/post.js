

export const usePostMethod = async (data, url) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  let response = await fetch(url, requestOptions, { cache: "no-store" }).then(
    (data) => data.json()
  );

  return response;
};
