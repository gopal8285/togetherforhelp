import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Volunteer from "./pages/Volunteer";

function App() {

  return (

    <BrowserRouter basename="/togetherforhelp">

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT PAGE */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* VOLUNTEER PAGE */}
        <Route
      path="/volunteer"
      element={<Volunteer />}
       />

      </Routes>

    </BrowserRouter>

  )
}

export default App;