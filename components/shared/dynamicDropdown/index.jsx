import styles from "@/styles/dynamicDropDown.module.scss";
import { FaAngleDown } from "react-icons/fa6";
import Input from "../input";
import Loading from "../loading";
import dynamic from "next/dynamic";
import { useState } from "react";

export const DropDownType = {
  transmission: "transmission",
  bodyStyle: "bodystyles",
  years: "years",
};
const TransmissionComponent = dynamic(() => import("./transmission"), {
  ssr: false,
  loading: () => <Loading />,
});
const BodyStyleComponent = dynamic(() => import("./bodyStyle"), {
  ssr: false,
  loading: () => <Loading />,
});

const YearsComponent = dynamic(() => import("./years"), {
  ssr: false,
  loading: () => <Loading />,
});

const DynamicDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const getItems = () => {
    switch (props.type) {
      case DropDownType.transmission:
        return <TransmissionComponent />;
      case DropDownType.bodyStyle:
        return <BodyStyleComponent />;
      case DropDownType.years:
        return <YearsComponent />;
    }
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <div className={styles.input}>
          <Input
            placeholder={props.placeholder}
            className="input-trasparent"
            onClick={() => setIsOpen((state) => !state)}
          />
          <span>
            <FaAngleDown />
          </span>
        </div>
        {isOpen && <div className={styles.content}>{getItems()}</div>}
      </div>
    </>
  );
};

export default DynamicDropdown;
