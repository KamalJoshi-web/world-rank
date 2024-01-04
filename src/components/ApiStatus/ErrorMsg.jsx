const ErrorMsg = () => {
  return (
    <div
      className=" h-screen  w-full flex justify-center items-center flex-col
    bg-black rounded-lg border-[1px] border-offBlack px-8 my-32 shadow-lg"
    >
      <h1 className=" text-center text-offWhite text-3xl">
        Oops! Something went wrong
      </h1>
    </div>
  );
};

export default ErrorMsg;
