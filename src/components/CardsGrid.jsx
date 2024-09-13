import CardComponent from "./CardComponent";
import { AppContext } from "@/pages/Home";
import { useContext } from "react";
import { calculateGrowth } from "../../utils.js/index";

const CardsGrid = ({ data }) => {
  const { expanded } = useContext(AppContext);

  return (
    <div
      className={`w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-20 mb-20 ${
        expanded ? "ml-[280px]" : "ml-16"
      }`}
    >
      {data.map((item) => (
        <CardComponent
          drug_name={item.drug_name}
          search_volume={
            item.monthly_search_volume[item.monthly_search_volume.length - 1]
              .search_volume
          }
          growth={calculateGrowth(item.monthly_search_volume)}
          monthly_search_volume={item.monthly_search_volume}
          trend={item.growth}
        />
      ))}
    </div>
  );
};

export default CardsGrid;
