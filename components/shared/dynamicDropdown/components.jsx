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

export {
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
};
