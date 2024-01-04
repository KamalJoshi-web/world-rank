import { ScaleLoader } from "react-spinners";
const Loader = () => {
  return (
    <div
      className=" h-screen  w-full flex justify-center items-center flex-col
     bg-black rounded-lg border-[1px] border-offBlack px-8 my-32 shadow-lg"
    >
      <h1 className=" text-center text-gray">Please wait..</h1>
      <ScaleLoader color="#4E80EE" />
    </div>
  );
};

export default Loader;
