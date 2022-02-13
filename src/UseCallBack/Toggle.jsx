import { useEffect } from "react";

export const Toggle = ({ namePrint }) => {
  console.log("Aman");
  useEffect(() => {
    console.log("Toggle Child");
  }, [namePrint]);
  return <>{namePrint("Aman")}</>;
};
