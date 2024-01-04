import { SearchSection, CountryData } from "../components";

const Home = () => {
  return (
    <div className=" bg-black rounded-lg border-[1px] border-offBlack px-8 my-32 shadow-lg">
      <SearchSection />
      <CountryData />
    </div>
  );
};

export default Home;
