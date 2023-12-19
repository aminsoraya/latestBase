import useYears from "@/hooks/actions/years";
import style from "@/styles/dynamicDropDown.module.scss";

const Transmission = () => {
  const { years } = useYears();
  return (
    <>
      {years?.map(({value,label}, index) => {
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
