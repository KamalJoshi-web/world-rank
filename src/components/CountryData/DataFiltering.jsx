import SortBy from "./SortBy";
import RegionFliter from "./RegionFliter";
import Status from "./Status";
const DataFiltering = () => {
  return (
    <div className=" pb-4 flex flex-col gap-4 w-[21%] max-lg:w-full ">
      <SortBy />
      <RegionFliter />
      <Status />
    </div>
  );
};

export default DataFiltering;
