
import style from "@/styles/dynamicDropDown.module.scss";

const ContractComponent = (props) => {
  return (
    <>
      {[
        { label: "Phone", value: 1 },
        { label: "Email", value: 2 },
      ].map(({ value, label }, index) => {
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

export default ContractComponent;
