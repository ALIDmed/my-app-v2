import Select from "react-select";
import { AnalysisContext } from "@/pages/Analysis";
import { useContext, useState } from "react";
import { filterData } from "../../../utils.js/index";
import { data } from "../../../data/demo_data";
const customStyles = {
  option: (provided) => ({
    ...provided,
    fontSize: "12px", // Adjust this value as needed
  }),
  multiValue: (provided) => ({
    ...provided,
    fontSize: "14px", // Adjust this value as needed
  }),
};

const DrugFilter = () => {
  const { analysisData, setAnalysisData, analysisFilters, setAnalysisFilters } =
    useContext(AnalysisContext);

  const handleOnChange = (drugs) => {
    const drugs_list = drugs.map((drug) => drug.value);
    const newFilters = { ...analysisFilters, drug_name: drugs_list };
    setAnalysisFilters(newFilters);
    filterData(data, newFilters, setAnalysisData);
  };


  return (
    <Select
      options={data.map((drug) => ({
        value: drug.drug_name,
        label: drug.drug_name,
      }))}
      styles={customStyles}
      onChange={handleOnChange}
      isMulti
      aria-valuemax={5}
      theme={(theme) => ({
        ...theme,
        borderRadius: 3,
        colors: {
          ...theme.colors,
          primary: "black",
        },
      })}
      className="w-full focus:ring-4 ring-inset m-0"
    />
  );
};

export default DrugFilter;
