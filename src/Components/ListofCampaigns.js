import { SearchBar } from "./SearchBar";
import { Filter } from "./Filter";
import TableList from "./TableList";

const ListofCampaigns = () => {
  return (
    <div className="bg-white rounded-lg mx-12 text-black">
      <div className="flex justify-between">
        <SearchBar />
        <Filter />
      </div>
      <TableList />
    </div>
  );
};

export default ListofCampaigns;
