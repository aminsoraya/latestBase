import { useAppStore } from "@/hooks/store";

const Map = () => {
  let { dealerData } = useAppStore();
  return (
    <iframe
      allow="geolocation"
      src={dealerData?.map_url}
      frameborder="0"
      width="100%"
      height="320"
      className="border-0 w-100 p-0 m-0"
      aria-hidden="false"
      tabindex="0"
      id="iframe"
    />
  );
};

export default Map;
