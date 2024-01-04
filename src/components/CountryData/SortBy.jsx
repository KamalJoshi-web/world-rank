import { useState } from "react";
import DropDownIcon from "../../assets/Expand_down.svg";
import { useDispatch } from "react-redux";
import { sortData } from "../../features/countrySlice";

const SortBy = () => {
  const [options, setOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Population");
  const dispatch = useDispatch();

  const handleOptionMenu = () => {
    setOptions((current) => !current);
  };

  const hanldeOptions = (e) => {
    setSelectedOption(e.currentTarget.innerText);
    let sortingOption = e.currentTarget.innerText;
    dispatch(sortData(sortingOption));
  };

  //   Styling
  const selectCommonStyles =
    " py-2 px-4 border-offBlack rounded-lg text-offWhite  max-w-[18rem] w-full flex ";

  const selectOptionHover =
    "hover:bg-offBlack cursor-pointer rounded-lg hover:px-4 duration-300";

  const selectOptionAnimation = options
    ? "visible opacity-100 top-[120%] "
    : "invisible opacity-0 top-2 ";

  return (
    <div>
      {/* SortBy */}

      <h3 className=" font-semibold">Sort by</h3>
      {/* Select */}
      <div
        className={`relative my-2  border-[3px]   
     justify-between items-center cursor-pointer ${selectCommonStyles} `}
        onClick={handleOptionMenu}
      >
        <h4>{selectedOption}</h4>
        <img src={DropDownIcon} alt="Drop-Down-Icon" />
        {/* Options */}
        <div
          className={` duration-200 absolute  left-0  flex-col gap-2 bg-black border-2 
        ${selectCommonStyles} ${selectOptionAnimation} `}
        >
          <h4 className={selectOptionHover} onClick={hanldeOptions}>
            Population
          </h4>
          <h4 className={selectOptionHover} onClick={hanldeOptions}>
            Name
          </h4>
          <h4 className={selectOptionHover} onClick={hanldeOptions}>
            Area &#40;km<sup>2</sup>&#41;
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SortBy;
