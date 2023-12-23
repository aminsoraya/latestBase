import styles from "@/styles/dynamicDropDown.module.scss";
import { FaAngleDown } from "react-icons/fa6";
import Input from "../input";
import { useState, useEffect, useRef } from "react";
import {
  TransmissionComponent,
  BodyStyleComponent,
  YearsComponent,
  DriveTrainComponent,
  ConditionsComponent,
  ExteriorComponent,
  SalutationComponent,
  MaritalComponent,
  HomeStatusComponent,
  ContractMethodComponent,
  MonthsComponent,
} from "./components";
import { DropDownTypes } from "./enumerations";

const DynamicDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(undefined);

  const getItems = () => {
    switch (props.type) {
      case DropDownTypes.transmission:
        return <TransmissionComponent callback={(item) => setSelected(item)} />;
      case DropDownTypes.bodyStyle:
        return <BodyStyleComponent callback={(item) => setSelected(item)} />;
      case DropDownTypes.years:
        return <YearsComponent callback={(item) => setSelected(item)} />;
      case DropDownTypes.driveTrain:
        return <DriveTrainComponent callback={(item) => setSelected(item)} />;
      case DropDownTypes.conditions:
        return <ConditionsComponent callback={(item) => setSelected(item)} />;
      case DropDownTypes.exteriorColors:
        return <ExteriorComponent callback={(item) => setSelected(item)} />;
      case DropDownTypes.salutations:
        return <SalutationComponent callback={(item) => setSelected(item)} />;
      case DropDownTypes.marital:
        return <MaritalComponent callback={(item) => setSelected(item)} />;
      case DropDownTypes.homeStatus:
        return <HomeStatusComponent callback={(item) => setSelected(item)} />;
      case DropDownTypes.contractMethod:
        return (
          <ContractMethodComponent callback={(item) => setSelected(item)} />
        );
      case DropDownTypes.months:
        return <MonthsComponent callback={(item) => setSelected(item)} />;
    }
  };

  const divRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked element is outside the div
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (selected) {
      setIsOpen(false);
      props.callback(selected.key);
    }
  }, [selected]);

  return (
    <>
      <div className={styles.inputContainer} ref={divRef}>
        <div className={styles.input}>
          <Input
            placeholder={props.placeholder}
            className="input-trasparent"
            onClick={() => setIsOpen((state) => !state)}
            value={`${selected?.alias || props.placeholder} ${
              (props.type == DropDownTypes.months && selected?.key) || ""
            }`}
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
