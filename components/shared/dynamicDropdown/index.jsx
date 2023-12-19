import styles from "@/styles/dynamicDropDown.module.scss";
import { FaAngleDown } from "react-icons/fa6";
import Input from "../input";
import Loading from "../loading";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";

export const DropDownType = {
  transmission: "transmission",
  bodyStyle: "bodystyles",
  years: "years",
  driveTrain: "driveTrain",
  conditions: "conditions",
  exteriorColors: "exteriorColors",
  salutations: "salutations",
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
const DriveTrainComponent = dynamic(() => import("./driveTrain"), {
  ssr: false,
  loading: () => <Loading />,
});
const ConditionsComponent = dynamic(() => import("./conditions"), {
  ssr: false,
  loading: () => <Loading />,
});
const ExteriorComponent = dynamic(() => import("./exteriorColors"), {
  ssr: false,
  loading: () => <Loading />,
});

const SaturationComponent = dynamic(() => import("./salutation"), {
  ssr: false,
  loading: () => <Loading />,
});

const DynamicDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(undefined);

  const getItems = () => {
    switch (props.type) {
      case DropDownType.transmission:
        return <TransmissionComponent callback={(item) => setSelected(item)} />;
      case DropDownType.bodyStyle:
        return <BodyStyleComponent callback={(item) => setSelected(item)} />;
      case DropDownType.years:
        return <YearsComponent callback={(item) => setSelected(item)} />;
      case DropDownType.driveTrain:
        return <DriveTrainComponent callback={(item) => setSelected(item)} />;
      case DropDownType.conditions:
        return <ConditionsComponent callback={(item) => setSelected(item)} />;
      case DropDownType.exteriorColors:
        return <ExteriorComponent callback={(item) => setSelected(item)} />;
      case DropDownType.saturations:
        return <SaturationComponent callback={(item) => setSelected(item)} />;
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
            value={selected?.alias}
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
