import { maritals } from "@/hooks/actions/marital";
import style from "@/styles/dynamicDropDown.module.scss";

const MaritalComponent = (props) => {
  console.log("maritals ", maritals);
  return (
    <>
      {maritals?.map(({ value, label }, index) => {
        return (
          <span
            key={index}
            onClick={() => props.callback({ key: value, alias: label })}
            className={style.items}
          >
            {label}
          </span>
        );
      })}
    </>
  );
};

export default MaritalComponent;
