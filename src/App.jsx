import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Aboutus";
import Whylime from "./components/pages/Whylime";
import Vehicles from "./components/pages/Vehicles";
import Locations from "./components/pages/Locations";
import Advertise from "./components/pages/Advertise";
import Blog from "./components/pages/Blog";
import Help from "./components/pages/Help";
import Error from "./components/pages/Error";

// import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/why-lime" element={<Whylime />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/help" element={<Help />} />
      </Route>
        <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
