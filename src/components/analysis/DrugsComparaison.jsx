import React from "react";
import DrugFilter from "./DrugFilter";
import DrugsBarChart from "./DrugsBarChart";

const DrugsComparaison = () => {
  return (
    <div className="w-full flex gap-2">
      <div className="w-[280px] flex flex-col justify-start items-start rounded-md border border-gray-200 p-4">
        <div className="w-full ">
          <DrugFilter />
        </div>
      </div>
      <div className="flex-1">
        <DrugsBarChart />
      </div>
    </div>
  );
};

export default DrugsComparaison;
