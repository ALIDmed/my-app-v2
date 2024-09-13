import { Shapes } from "lucide-react";
import Select from "react-select";
import { categories } from "../../../../data/categories";
import { data } from "../../../../data/demo_data";
import { filterData } from "../../../../utils.js/index";
import { AppContext } from "@/pages/Home";
import { useContext } from "react";

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

const CategoryFilter = ({ expanded }) => {
  const { filters, setFilters, setData } = useContext(AppContext);

  const handleOnChange = (categories) => {
    const categories_list = categories.map((category) => category.value);
    const newFilters = { ...filters, category: categories_list };
    setFilters(newFilters);
    filterData(data, newFilters, setData);
  };

  return (
    <li className="relative flex items-center py-2 px-3 my-1 font-medium rounded-md transition-colors group flex-col gap-2">
      <div className="flex flex-row">
        <Shapes size={20} />
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "hidden"
          }`}
        >
          Category
        </span>
      </div>
      <Select
        options={categories}
        onChange={handleOnChange}
        styles={customStyles}
        isMulti
        theme={(theme) => ({
          ...theme,
          borderRadius: 3,
          colors: {
            ...theme.colors,
            primary: "black",
          },
        })}
        className={`focus:ring-4 ring-pink-500 ring-inset w-full max-w-[240px] m-0 ${
          expanded ? "w-52" : "hidden"
        }`}
      />
    </li>
  );
};

export default CategoryFilter;
