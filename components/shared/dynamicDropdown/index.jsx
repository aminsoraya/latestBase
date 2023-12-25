import styles from "@/styles/dynamicDropDown.module.scss";
import { FaAngleDown } from "react-icons/fa6";
import Input from "../input";
import { useState, useEffect, useRef } from "react";
import * as Dynamic from "./components";
import { DropDownTypes } from "./enumerations";


const DynamicDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(undefined);

  const getItems = () => {
    switch (props.type) {
      case DropDownTypes.transmission:
        return (
          <Dynamic.TransmissionComponent
            callback={(item) => setSelected(item)}
          />
        );
      case DropDownTypes.bodyStyle:
        return (
          <Dynamic.BodyStyleComponent callback={(item) => setSelected(item)} />
        );
      case DropDownTypes.years:
        return (
          <Dynamic.YearsComponent callback={(item) => setSelected(item)} />
        );
      case DropDownTypes.driveTrain:
        return (
          <Dynamic.DriveTrainComponent callback={(item) => setSelected(item)} />
        );
      case DropDownTypes.conditions:
        return (
          <Dynamic.ConditionsComponent callback={(item) => setSelected(item)} />
        );
      case DropDownTypes.exteriorColors:
        return (
          <Dynamic.ExteriorComponent callback={(item) => setSelected(item)} />
        );
      case DropDownTypes.salutations:
        return (
          <Dynamic.SalutationComponent callback={(item) => setSelected(item)} />
        );
      case DropDownTypes.marital:
        return (
          <Dynamic.MaritalComponent callback={(item) => setSelected(item)} />
        );
      case DropDownTypes.homeStatus:
        return (
          <Dynamic.HomeStatusComponent callback={(item) => setSelected(item)} />
        );
      case DropDownTypes.contractMethod:
        return (
          <Dynamic.ContractMethodComponent
            callback={(item) => setSelected(item)}
          />
        );
      case DropDownTypes.months:
        return (
          <Dynamic.MonthsComponent callback={(item) => setSelected(item)} />
        );

      case DropDownTypes.inventory_makes:
        return (
          <Dynamic.InventoryMakesComponent
            callback={(item) => setSelected(item)}
          />
        );
      case DropDownTypes.inventory_minYear:
        return (
          <Dynamic.InventoryMinYearComponent
            callback={(item) => setSelected(item)}
          />
        );
      case DropDownTypes.inventory_maxYear:
        return (
          <Dynamic.InventoryMaxYearComponent
            callback={(item) => setSelected(item)}
          />
        );
      case DropDownTypes.inventory_bodyStyle:
        return (
          <Dynamic.InventoryBodyStyleComponent
            callback={(item) => setSelected(item)}
          />
        );
      case DropDownTypes.inventory_Color:
        return (
          <Dynamic.InventoryColorComponent
            callback={(item) => setSelected(item)}
          />
        );
      case DropDownTypes.inventory_MinPrice:
        return (
          <Dynamic.InventoryMinPriceComponent
            callback={(item) => setSelected(item)}
          />
        );
      case DropDownTypes.inventory_MaxPrice:
        return (
          <Dynamic.InventoryMaxPriceComponent
            callback={(item) => setSelected(item)}
          />
        );
      case DropDownTypes.transmission:
        return (
          <Dynamic.TransmissionComponent
            callback={(item) => setSelected(item)}
          />
        );
      case DropDownTypes.inventory_FuelType:
        return (
          <Dynamic.InventoryFuelTypeComponent
            callback={(item) => setSelected(item)}
          />
        );
      case DropDownTypes.inventory_MinKm:
        return (
          <Dynamic.InventoryMinKmComponent
            callback={(item) => setSelected(item)}
          />
        );
      case DropDownTypes.inventory_MaxKm:
        return (
          <Dynamic.InventoryMaxKmComponent
            callback={(item) => setSelected(item)}
          />
        );
      case DropDownTypes.inventory_Engine:
        return (
          <Dynamic.InventoryEngineComponent
            callback={(item) => setSelected(item)}
          />
        );
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
            value={`${(selected?.alias || props.placeholder).toLocaleString()} ${
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
