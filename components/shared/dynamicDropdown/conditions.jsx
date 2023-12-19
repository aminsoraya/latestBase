import style from "@/styles/dynamicDropDown.module.scss";
import { conditions } from "@/hooks/actions/conditions";

const Transmission = (props) => {
  return (
    <>
      {conditions.map(({ label, value }, index) => {
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

export default Transmission;
