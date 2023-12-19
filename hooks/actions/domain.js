"use server";
import { headers } from "next/headers";

const useDomain = () => {
  let header = headers();
  let url = header.get("host");
  let pureUrlString = url.replace("http://", "").replace("https://");

  return pureUrlString;
};

export default useDomain;
