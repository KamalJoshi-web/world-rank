import TotalCountries from "./TotalCountries";
import SearchBar from "./SearchBar";
const SearchSection = () => {
  return (
    <div className=" flex justify-between py-4 items-center flex-wrap-reverse gap-2">
      <TotalCountries />
      <SearchBar />
    </div>
  );
};

export default SearchSection;
