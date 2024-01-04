import SearchIcon from "../../assets/Search.svg";
import { useDispatch } from "react-redux";
import { addSearchedText } from "../../features/countrySlice";
const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(addSearchedText(e.target.value));
  };

  return (
    <div className=" relative max-sm:w-full">
      <input
        type="text"
        className=" bg-offBlack rounded-lg text-md py-3 pl-10 w-[23rem] max-sm:w-full font-medium text-opacity-75 
        outline-none focus:text-offWhite  placeholder:text-gray
        focus:outline-gray focus:border-offBlack"
        placeholder="Search by Name, Region, Subregion"
        onChange={handleSearch}
      />
      <img
        src={SearchIcon}
        alt="Search-Icon"
        className=" absolute top-[27%] left-[1.8%]"
      />
    </div>
  );
};

export default SearchBar;
