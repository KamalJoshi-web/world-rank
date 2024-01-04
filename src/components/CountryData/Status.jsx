import { useDispatch, useSelector } from "react-redux";
import CheckMark from "../../assets/Done_round.svg";
import { unMemberFunc, independent } from "../../features/countrySlice";

const Status = () => {
  const { countries } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const handleChecked = (e) => {
    let currentElement = e.currentTarget;

    if (currentElement.id === "UNMem") {
      dispatch(unMemberFunc());
    } else if (currentElement.id === "Independent") {
      dispatch(independent());
    }
  };

  return (
    <div>
      {/* Status */}
      <h3 className=" font-semibold">Status</h3>
      {/* CheckBox */}
      <div className=" my-2">
        <CheckBox
          id={"UNMem"}
          label={"Member of the United Nations"}
          onChange={handleChecked}
          checked={countries.unMember}
        />
        <CheckBox
          id={"Independent"}
          label={"Independent"}
          onChange={handleChecked}
          checked={countries.independent}
        />
      </div>
    </div>
  );
};

export default Status;

const CheckBox = ({ id, label, ...props }) => {
  return (
    <div className=" relative items-center flex  ">
      <input
        type="checkbox"
        id={id}
        className=" peer shrink-0 
            appearance-none w-6 h-6 border-2 border-gray rounded-sm mt-1 checked:bg-lightBlue checked:border-0 cursor-pointer  "
        {...props}
      />
      <label
        htmlFor={id}
        className=" font-semibold text-offWhite px-4 py-2 text-xs cursor-pointer"
      >
        {label}
      </label>
      <img
        src={CheckMark}
        alt="checked"
        className="  absolute top-[15%]  w-6 h-6 mt-1 hidden peer-checked:block "
      />
    </div>
  );
};
