import Loading from "../loading";
import dynamic from "next/dynamic";

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

const SalutationComponent = dynamic(() => import("./salutation"), {
  ssr: false,
  loading: () => <Loading />,
});

const MaritalComponent = dynamic(() => import("./marital"), {
  ssr: false,
  loading: () => <Loading />,
});

const HomeStatusComponent = dynamic(() => import("./homeStatus"), {
  ssr: false,
  loading: () => <Loading />,
});

const ContractMethodComponent = dynamic(() => import("./contractMethod"), {
  ssr: false,
  loading: () => <Loading />,
});

const MonthsComponent = dynamic(() => import("./months"), {
  ssr: false,
  loading: () => <Loading />,
});
const InventoryMakesComponent = dynamic(() => import("./inventory/makes"), {
  ssr: false,
  loading: () => <Loading />,
});
const InventoryMinYearComponent = dynamic(() => import("./inventory/minYear"), {
  ssr: false,
  loading: () => <Loading />,
});
const InventoryMaxYearComponent = dynamic(() => import("./inventory/maxYear"), {
  ssr: false,
  loading: () => <Loading />,
});
const InventoryBodyStyleComponent = dynamic(
  () => import("./inventory/bodyStyle"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);
const InventoryMinPriceComponent = dynamic(
  () => import("./inventory/minPrice"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

const InventoryMaxPriceComponent = dynamic(
  () => import("./inventory/maxPrice"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);
const InventoryTransmissionComponent = dynamic(
  () => import("./inventory/transmission"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);
const InventoryFuelTypeComponent = dynamic(
  () => import("./inventory/fuelType"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);
const InventoryMinKmComponent = dynamic(() => import("./inventory/minKm"), {
  ssr: false,
  loading: () => <Loading />,
});
const InventoryMaxKmComponent = dynamic(() => import("./inventory/maxKm"), {
  ssr: false,
  loading: () => <Loading />,
});
const InventoryEngineComponent = dynamic(() => import("./inventory/engine"), {
  ssr: false,
  loading: () => <Loading />,
});
const InventoryColorComponent = dynamic(() => import("./inventory/color"), {
  ssr: false,
  loading: () => <Loading />,
});

export {
  InventoryMakesComponent,
  MonthsComponent,
  ContractMethodComponent,
  HomeStatusComponent,
  MaritalComponent,
  SalutationComponent,
  ExteriorComponent,
  ConditionsComponent,
  DriveTrainComponent,
  YearsComponent,
  BodyStyleComponent,
  TransmissionComponent,
  InventoryMinYearComponent,
  InventoryMaxYearComponent,
  InventoryBodyStyleComponent,
  InventoryEngineComponent,
  InventoryMinKmComponent,
  InventoryMaxKmComponent,
  InventoryFuelTypeComponent,
  InventoryTransmissionComponent,
  InventoryMaxPriceComponent,
  InventoryMinPriceComponent,
  InventoryColorComponent,
};
