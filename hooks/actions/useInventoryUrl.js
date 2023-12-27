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

  let mounted = true;
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
          console.log("response ", response);
          setData(response);
        })
        .finally(() => setLoading(false))
        .catch((error) => {
          console.log(error.message);
        });
    })();

    return () => {
      mounted = false;
    };
  }, [searchParams, baseUrl, domain]);

  return { data, loading };
};

export default useInventoryUrl;