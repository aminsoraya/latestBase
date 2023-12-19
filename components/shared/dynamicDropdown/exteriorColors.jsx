import useSWR from "swr";
import { useAppStore } from "@/hooks/store";
import Loading from "../loading";
import { useVehicles } from "@/hooks/actions/vehicles";
import style from "@/styles/dynamicDropDown.module.scss"

const Transmission = (props) => {
  const { baseUrl } = useAppStore();
  let { data, isLoading } = useSWR(`${baseUrl}/api/colors`, useVehicles);

  return (
    <>
      {isLoading && <Loading />}
      {data &&
        data.map(({ id, name }, index) => {
          return (
            <span
              onClick={() => props.callback({ key: id, alias: name })}
              key={index}
              className={style.items}
            >
              {name}
            </span>
          );
        })}
    </>
  );
};

export default Transmission;
