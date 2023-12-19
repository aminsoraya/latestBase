import style from "@/styles/dynamicDropDown.module.scss";
import { DIREVE_TYPES } from "@/hooks/actions/valueYourTrade";

const Transmission = (props) => {
  return (
    <>
      {DIREVE_TYPES.map(({ label, value }, index) => {
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
