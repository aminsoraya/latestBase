import { initialValues } from "@/components/used-inventory/form";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { usePostMethod } from "./api/post";
import { mutate } from "swr";
import { useAppStore } from "../store";

const useInventoryUrl = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const { baseUrl, domain } = useAppStore();
  const { GetAllUrlFields } = useField();
  const [urlObjects, setUrlObjects] = useState();

  useEffect(() => {
    let allUrlObjects = GetAllUrlFields();
    let allUrlObjectLength = Object.entries(allUrlObjects).length;

    //it means except Base field
    if (allUrlObjectLength != 1)
      if (allUrlObjects != urlObjects) {
        (async () => {
          setUrlObjects(urlObjects);
          setLoading(true);

          let fieldsData =
            allUrlObjectLength == 0 ? initialValues : allUrlObjects;

          setUrlObjects(fieldsData);

          await mutate(
            "inventory",
            usePostMethod(
              fieldsData,
              `${baseUrl}/api/dealership/advance/search/vehicles/${domain}?page=${currentPage}&limit=10`
            )
          )
            .then((data) => {
              currentPage > 1
                ? setData((state) => [...state, ...data])
                : setData(data);
            })
            .finally(() => setLoading(false))
            .catch((error) => {
              console.log(error.message);
            });
        })();
      }
  }, [searchParams, baseUrl, domain, currentPage]);

  return { data, loading, setCurrentPage };
};

export const useField = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const SetBaseField = (fieldName, fieldValue) => {
    let params = new URLSearchParams(searchParams);

    let findedBase = false;
    for (const key of params.keys()) {
      findedBase = params.has(key);
    }

    if (!findedBase) {
      params.set(fieldName, fieldValue);
      router.replace(`${pathName}?${params.toString()}`, { scroll: false });
    }
  };

  const GetAllUrlFields = () => {
    let params = new URLSearchParams(searchParams);

    const paramsObject = Object.fromEntries(
      Array.from(params.keys()).map((key) => [key, params.get(key)])
    );

    return paramsObject;
  };

  return {
    GetAllUrlFields,
    SetBaseField,
  };
};
export const GetSpecificField = (item) => {
  const searchParams = useSearchParams();
  let params = new URLSearchParams(searchParams);
  return params.get(item);
};

export default useInventoryUrl;
