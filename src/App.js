import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import LogoSVG from './images/logo.svg'

function App() {
  const navLinks = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/" },
    { id: 3, text: "Gallery", path: "/" },
    { id: 4, text: "Contact", path: "/" },
  ];
  return (
    <div className="">
      <BrowserRouter>
        <div className=" text-xl w-full absolute z-10 top-12 ">
          <NavBar linkArray={navLinks} logo={LogoSVG} />
        </div>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
