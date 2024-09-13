import Navbar from "@/components/Navbar";
import AnalysisSidebar from "@/components/analysis/AnalysisSidebar";
import { createContext, useState } from "react";
import { data as demoData } from "../../data/demo_data";
import DrugsBarChart from "@/components/analysis/DrugsBarChart";
import ChartsContainer from "@/components/analysis/ChartsContainer";
import DrugsComparaison from "@/components/analysis/DrugsComparaison";
import LaboComparaison from "@/components/analysis/LaboComparaison";

export const AnalysisContext = createContext();

const Analysis = () => {
  const [analysisData, setAnalysisData] = useState(demoData);
  const [analysisFilters, setAnalysisFilters] = useState({
    drug_name: "",
    labo_name: "",
    category: [],
    subcategory: "",
    min_month: "",
    max_month: "",
    min_year: "",
    max_year: "",
  });

  return (
    <>
      <AnalysisContext.Provider
        value={{
          analysisData,
          setAnalysisData,
          analysisFilters,
          setAnalysisFilters,
        }}
      >
        <Navbar />
        <div className="w-screen flex justify-center px-4 lg:px-0 mt-28">
          <div className="w-full flex flex-col space-y-12 max-w-[1350px]">
            <DrugsComparaison />
            {/* <LaboComparaison /> */}
          </div>
        </div>
      </AnalysisContext.Provider>
    </>
  );
};

export default Analysis;
