"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityAnalytics() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Clarity.init("t4p7xwzuf0");
    }
  }, []);

  return null;
}