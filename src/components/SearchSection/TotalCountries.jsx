import { useSelector } from "react-redux";

const TotalCountries = () => {
  const { countries } = useSelector((state) => state.countries);
  return (
    <h2 className=" font-bold">Found {countries.data.length} countries</h2>
  );
};

export default TotalCountries;
