import { School } from "lucide-react";
import Select from "react-select";
import { labo_names } from "../../../../data/labo_names";
import { useContext } from "react";
import { AppContext } from "@/pages/Home";
import { filterData } from "../../../../utils.js/index";
import { data } from "../../../../data/demo_data";

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

const LaboFilter = ({ expanded }) => {
  const { filters, setFilters, setData } = useContext(AppContext);

  const handleOnChange = (labos) => {
    const labos_list = labos.map((labo) => labo.value);
    const newFilters = { ...filters, labo_name: labos_list };
    setFilters(newFilters);
    filterData(data, newFilters, setData);
  };
  return (
    <li className="relative flex items-center py-2 px-3 my-1 font-medium rounded-md transition-colors group flex-col gap-2">
      <div className="flex flex-row">
        <School size={20} />
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "hidden"
          }`}
        >
          Laboratory Name
        </span>
      </div>
      <Select
        options={labo_names}
        styles={customStyles}
        isMulti
        onChange={handleOnChange}
        theme={(theme) => ({
          ...theme,
          borderRadius: 3,
          colors: {
            ...theme.colors,
            primary: "black",
          },
        })}
        className={`focus:ring-4 ring-inset w-full max-w-[240px] m-0 ${
          expanded ? "w-52" : "hidden"
        }`}
      />
    </li>
  );
};

export default LaboFilter;
