import { Container, Logo } from "./components";
import { Home, CountryDetails } from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countryDetails/:id" element={<CountryDetails />} />
      </Routes>
    </Container>
  );
};

export default App;
