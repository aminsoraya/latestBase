import style from "@/styles/dynamicDropDown.module.scss";
import { conditions } from "@/hooks/actions/conditions";

const Transmission = () => {
  return (
    <>
      {conditions.map(({ label, value }, index) => {
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
