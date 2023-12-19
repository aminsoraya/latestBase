import style from "@/styles/dynamicDropDown.module.scss";
import { DIREVE_TYPES } from "@/hooks/actions/valueYourTrade";

const Transmission = () => {
  return (
    <>
      {DIREVE_TYPES.map(({ label, value }, index) => {
        return (
          <span key={index} className={style.items}>
            {label}
          </span>
        );
      })}
    </>
  );
};

export default Transmission;
