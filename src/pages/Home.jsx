import CardsGrid from "@/components/CardsGrid";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/Navbar";

import { createContext, useState } from "react";
import { data as demoData } from "../../data/demo_data";

export const AppContext = createContext();

const Home = () =>{
  const [expanded, setExpanded] = useState(true);
  const [data, setData] = useState(demoData);
  const [filters, setFilters] = useState({
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
      <AppContext.Provider
        value={{ expanded, setExpanded, filters, setFilters, setData }}
      >
        <Navbar />
        <div className="p-0 font-inter px-[20px] flex flex-row">
          <Sidebar />
          <CardsGrid data={data} />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default Home;
