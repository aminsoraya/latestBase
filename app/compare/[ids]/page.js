"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { useAppStore } from "@/hooks/store";
import useSWR, { mutate } from "swr";
import { usePostMethod } from "@/hooks/actions/api/post";
import axios from "axios";

const Compare = ({ params: { ids } }) => {
  const { baseUrl, domain } = useAppStore();


  return <div style={{minHeight:"100vh"}}>compare</div>;
};

export default Compare;
