import search from "../../Assets/search.png";


export const SearchBar = () => {
  return (
    <div>
      <button className="rounded-lg m-4 p-2  border-2 border-grey-300 flex items-center text-[#00000080]">
        <img src={search} width={24} height={24} className="pr-2" />
        Search for the campaign
      </button>
    </div>
  );
};
