import { useEffect } from "react";
import {
  fetchCountryData,
  fetchNeighbouringCountriesData,
} from "../features/countrySlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMsg, Loader } from "../components";

const CountryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log();
  const countryDetail = useSelector((state) => state.countries.countryDetail);
  const neighbouringCountris = useSelector(
    (state) => state.countries.neighbouringCountries
  );

  useEffect(() => {
    dispatch(fetchCountryData(id)).then((response) => {
      const borders = String(response.payload[0].borders);
      return dispatch(fetchNeighbouringCountriesData(borders));
    });
  }, [id]);

  if (countryDetail.dataLoading) {
    return <Loader />;
  }
  if (countryDetail.isError) {
    return <ErrorMsg />;
  }

  return (
    <div className=" bg-black rounded-lg border-[1px] border-offBlack  my-32 shadow-lg">
      {countryDetail.data.map((item, index) => (
        <div key={index}>
          {/* Flag */}
          <img
            src={item.flags.png}
            alt="flag"
            className=" mx-auto relative bottom-12 rounded-lg"
          />
          {/* Names */}
          <h1 className=" text-offWhite text-center text-4xl font-bold">
            {item.name.common}
          </h1>
          <h2 className=" text-offWhite text-center text-2xl">
            {item.name.official}
          </h2>
          {/* Details */}
          <div className=" flex justify-center gap-10 my-8 max-md:flex-col max-md:items-center">
            <div className="  font-semibold p-3  w-max rounded-xl bg-offBlack text-offWhite ">
              <h4>
                Population <span className=" text-black text-xl"> | </span>{" "}
                {item.population}
              </h4>
            </div>
            <div className="text-sm  font-semibold p-3  w-max rounded-xl bg-offBlack text-offWhite">
              <h4>
                Area &#40;km<sup>2</sup>&#41;{" "}
                <span className=" text-black text-xl"> | </span>
                {item.area}
              </h4>
            </div>
          </div>
          {/* Extra Detail */}
          <div className=" py-4 px-8 border border-offBlack flex items-center justify-between">
            <h5>Capital</h5>
            <h6 className="text-offWhite">{item.capital}</h6>
          </div>
          <div className=" py-4 px-8 border border-offBlack flex items-center justify-between">
            <h5>Subregion</h5>
            <h6 className="text-offWhite">{item.subregion}</h6>
          </div>
          <div className=" py-4 px-8 border border-offBlack flex items-center justify-between">
            <h5>Language</h5>
            <h6 className="text-offWhite">
              {Object.values(item.languages)[0]}
            </h6>
          </div>
          <div className=" py-4 px-8 border border-offBlack flex items-center justify-between">
            <h5>Currencies</h5>
            <h6 className="text-offWhite">
              {Object.values(item.currencies)[0].symbol} |{" "}
              {Object.values(item.currencies)[0].name}
            </h6>
          </div>
          <div className=" py-4 px-8 border border-offBlack flex items-center justify-between">
            <h5>Continents</h5>
            <h6 className="text-offWhite">{item.region}</h6>
          </div>
        </div>
      ))}
      <div className=" py-4 px-8 border border-offBlack flex flex-col max-md:items-center  justify-between gap-5">
        <h5>Neighbouring Countries</h5>
        <div className=" flex flex-wrap gap-5 max-md:items-center ">
          {neighbouringCountris.data.length < 0
            ? "N/A"
            : neighbouringCountris.data.map((item, index) => (
                <div
                  key={index}
                  className=" mx-auto hover:bg-offBlack p-2 duration-300 rounded-lg cursor-pointer"
                  onClick={() =>
                    navigate(`/countryDetails/${item.name.common}`)
                  }
                >
                  <img
                    src={item.flags.png}
                    alt="flag"
                    className=" w-28 h-[100px] rounded-lg mx-auto "
                  />
                  <h5 className=" text-offWhite text-center my-5">
                    {item.name.common}
                  </h5>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
