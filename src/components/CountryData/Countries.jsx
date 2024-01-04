import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, regionFilter } from "../../features/countrySlice";
import { useNavigate } from "react-router-dom";
import { Loader, ErrorMsg } from "../../components";

const Countries = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countries } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchData());
    dispatch(regionFilter(["Americas", "Africa", "Asia", "Europe"]));

    return () => {
      dispatch(regionFilter([]));
    };
  }, []);

  // Filter And Search Methods

  const dataWithSearchedFunc = countries.data.filter((country) => {
    const lowercasedSearchText = countries.searchedText
      .toLowerCase()
      .replaceAll(/\s/g, "");
    return (
      lowercasedSearchText === "" ||
      country.name.common.toLowerCase().includes(lowercasedSearchText) ||
      String(country.subregion)
        .replaceAll(/\s/g, "")
        .toLowerCase()
        .includes(lowercasedSearchText) ||
      country.region.toLowerCase().includes(lowercasedSearchText)
    );
  });

  const dataWithRegionFiltered = dataWithSearchedFunc.filter((country) => {
    return countries.regionFilter.includes(country.region);
  });

  const dataWithStatus = dataWithRegionFiltered.filter((country) => {
    return (
      countries.independent === country.independent &&
      countries.unMember === country.unMember
    );
  });

  if (countries.isLoading) {
    return <Loader />;
  }
  if (countries.error) {
    return <ErrorMsg />;
  }

  return (
    <div className="w-[74%] overflow-y-auto h-full max-lg:w-full  ">
      {/* Table */}
      <table className=" w-full ">
        <thead className=" border-b-2  border-b-offBlack">
          <tr>
            <th scope="col" className=" text-left pr-6 py-3">
              Flag
            </th>
            <th
              scope="col"
              className=" text-center text-wrap px-6 py-3 max-md:px-1"
            >
              Name
            </th>
            <th scope="col" className=" text-left px-6 py-3 max-md:px-1 ">
              Population
            </th>
            <th scope="col" className=" text-left px-6 py-3 max-md:hidden ">
              Area &#40;km<sup>2</sup>&#41;
            </th>
            <th scope="col" className=" text-left px-6 py-3 max-md:hidden ">
              Region
            </th>
          </tr>
        </thead>
        <tbody>
          {dataWithStatus.map((item) => (
            <tr
              key={item.name.common}
              className=" hover:bg-offBlack cursor-pointer rounded-lg duration-300"
              onClick={() => navigate(`/countryDetails/${item.name.common}`)}
            >
              <td className="w-16 h-12 " scope="row">
                <img
                  src={item.flags.png}
                  alt=""
                  className=" w-full h-full  rounded-md"
                />
              </td>
              <td className=" text-offWhite px-6 py-5 text-center max-md:px-1 max-md:text-sm ">
                {item.name.common}
              </td>
              <td className=" text-offWhite px-6 py-5 max-md:px-1 ">
                {item.population}
              </td>
              <td className=" text-offWhite px-6 py-5  max-md:hidden  ">
                {item.area}
              </td>
              <td className=" text-offWhite px-6 py-5 max-md:hidden ">
                {item.region}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Countries;
