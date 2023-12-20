import { months } from "@/hooks/actions/months";
import style from "@/styles/dynamicDropDown.module.scss";

const MaritalComponent = (props) => {
  return (
    <>
      {months?.map(({ value, label }, index) => {
        return (
          <span
            key={index}
            onClick={() => props.callback({ key: value, alias: label })}
            className={style.items}
          >
            {value} {label}
          </span>
        );
      })}
    </>
  );
};

export default MaritalComponent;
