import { Layers2 } from "lucide-react";
import Select from "react-select";
import { subCategories } from "../../../../data/subcategories";
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

const SubCategoryFilter = ({ expanded }) => {
  const { filters, setFilters, setData } = useContext(AppContext);

  const handleOnChange = (sub_categories) => {
    const sub_categories_list = sub_categories.map(
      (sub_category) => sub_category.value
    );
    const newFilters = { ...filters, subcategory: sub_categories_list };
    setFilters(newFilters);
    filterData(data, newFilters, setData);
  };

  return (
    <li className="relative flex items-center py-2 px-3 my-1 font-medium rounded-md transition-colors group flex-col gap-2">
      <div className="flex flex-row">
        <Layers2 size={20} />
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "hidden"
          }`}
        >
          Sub-Category
        </span>
      </div>
      <Select
        styles={customStyles}
        options={subCategories}
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
        className={`focus:ring-4 ring-pink-500 ring-inset w-full max-w-[240px] m-0 ${
          expanded ? "w-52" : "hidden"
        }`}
      />
    </li>
  );
};

export default SubCategoryFilter;
