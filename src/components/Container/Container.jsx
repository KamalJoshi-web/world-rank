import { BrowserRouter as Router } from "react-router-dom";

const Container = ({ children }) => {
  return (
    <Router>
      <main className=" max-w-[1440px] mx-auto px-5 max-md:px-0 ">
        {children}
      </main>
    </Router>
  );
};

export default Container;
