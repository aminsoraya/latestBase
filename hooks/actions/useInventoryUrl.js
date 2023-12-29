import { initialValues } from "@/components/used-inventory/form";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { usePostMethod } from "./api/post";
import { OBJECT } from "swr/_internal";
import { mutate } from "swr";
import { useAppStore } from "../store";

const useInventoryUrl = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { baseUrl, domain } = useAppStore();

  useEffect(() => {
    setLoading(true);

    (async () => {
      let key = OBJECT.keys(initialValues);
      let params = new URLSearchParams(searchParams);

      var values = {};
      key.forEach((item) => {
        values[item] = params.get(item) || null;
      });

      await mutate(
        "inventory",
        usePostMethod(
          values,
          `${baseUrl}/api/dealership/advance/search/vehicles/${domain}?page=1&limit=10`
        )
      )
        .then((response) => {
          setData(response);
        })
        .finally(() => setLoading(false))
        .catch((error) => {
          console.log(error.message);
        });
    })();
  }, [searchParams, baseUrl, domain]);

  return { data, loading };
};

export const GetSpecificField = (item) => {
  const searchParams = useSearchParams();
  let params = new URLSearchParams(searchParams);
  return params.get(item);
};

export default useInventoryUrl;
