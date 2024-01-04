import { useDispatch } from "react-redux";
import {
  regionFilterPushValue,
  regionFilterDelValue,
} from "../../features/countrySlice";

const RegionFliter = () => {
  const dispatch = useDispatch();

  const regions = [
    { name: "Americas", style: "regionHighlight" },
    { name: "Antarctic", style: "" },
    { name: "Africa", style: "regionHighlight" },
    { name: "Asia", style: "regionHighlight" },
    { name: "Europe", style: "regionHighlight" },
    { name: "Oceania", style: "" },
  ];

  const handleRegionStyle = (e) => {
    const currentEliment = e.currentTarget;
    currentEliment.classList.toggle("regionHighlight");
    if (currentEliment.classList.contains("regionHighlight")) {
      dispatch(regionFilterPushValue(currentEliment.innerText));
    } else {
      dispatch(regionFilterDelValue(currentEliment.innerText));
    }
  };

  return (
    <div>
      {/* Region Filtering */}
      <h3 className=" font-semibold">Region</h3>
      <ul className=" flex gap-5 flex-wrap my-2">
        {regions.map((item, index) => (
          <li
            key={index}
            className={`${item.style} text-sm  font-semibold p-3  w-max rounded-xl cursor-pointer `}
            onClick={handleRegionStyle}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegionFliter;
