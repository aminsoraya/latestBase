import useYears from "@/hooks/actions/years";
import style from "@/styles/dynamicDropDown.module.scss";

const Transmission = (props) => {
  const { years } = useYears();
  return (
    <>
      {years?.map(({ value, label }, index) => {
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
