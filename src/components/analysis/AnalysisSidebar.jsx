import React from "react";
import logo from "@/assets/logo.png";
import DrugFilter from "./DrugFilter";
const AnalysisSidebar = () => {
  return (
    <div className="h-screen fixed top-0 left-0 z-10 w-64">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm p-4 space-y-4">
        <img src={logo} className="overflow-hidden transition-all w-[34px]" />
        <DrugFilter />
      </nav>
    </div>
  );
};

export default AnalysisSidebar;
