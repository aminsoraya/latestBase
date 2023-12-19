"use client";
import { useRouter } from "next/router";
import NextTopLoader from "nextjs-toploader";

const NProgressContainer = () => {
  return (
    <NextTopLoader
      color="orange"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
    />
  );
};

export default NProgressContainer;
