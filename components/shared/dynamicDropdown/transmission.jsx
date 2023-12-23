import useSWR from "swr";
import { useAppStore } from "@/hooks/store";
import Loading from "../loading";
import { useVehicles } from "@/hooks/actions/api/vehicles";
import style from "@/styles/dynamicDropDown.module.scss";

const Transmission = (props) => {
  const { baseUrl } = useAppStore();
  let { data, isLoading } = useSWR(`${baseUrl}/api/transmissions`, useVehicles);

  return (
    <>
      {isLoading && <Loading />}
      {data &&
        data.map(({ id, name }, index) => {
          return (
            <span
              key={index}
              onClick={() => props.callback({ key: id, alias: name })}
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
