import Countries from "./Countries";
import DataFiltering from "./DataFiltering";

const CountryData = () => {
  return (
    <div className="  flex gap-2 justify-between items-start h-screen overflow-y-auto max-lg:flex-col ">
      <DataFiltering />
      <Countries />
    </div>
  );
};

export default CountryData;
