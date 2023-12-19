import { homeStatus } from "@/hooks/actions/homeStatus";
import style from "@/styles/dynamicDropDown.module.scss";

const Salutation = (props) => {
  return homeStatus.map((item, index) => {
    return (
      <div key={index}>
        <span
          className={style.items}
          key={index}
          onClick={() => props.callback({ key: item.value, alias: item.label })}
        >
          {item.label}
        </span>
      </div>
    );
  });
};

export default Salutation;
