import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import HomeTest from "./pages/HomeTest";



import Home from "./pages/Home";
import About from "./pages/About";
import Volunteer from "./pages/Volunteer";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ScrollToTop
from "./components/ScrollToTop";
import FloatingDonateButton from "./components/FloatingDonateButton";
import Donate from "./pages/Donate";
import Team from "./pages/Team";
import Faq from "./pages/Faq";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Copyright from "./pages/Copyright";
import Sitemap from "./pages/Sitemap";
import Recycle from "./pages/Recycle";


function App() {

  useEffect(() => {

    // deterrent only — blocks the desktop right-click "Save Image As"
    // shortcut on <img> elements. A determined visitor can still get
    // to the file another way (devtools, screenshot); this just
    // removes the casual one-click download option.
    const blockImageContextMenu = (e) => {

      if (e.target.tagName === "IMG") {

        e.preventDefault();

      }

    };

    document.addEventListener("contextmenu", blockImageContextMenu);

    return () => {

      document.removeEventListener("contextmenu", blockImageContextMenu);

    };

  }, []);

  return (

    <BrowserRouter basename="/togetherforhelp">
      <ScrollToTop />

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
<Route
  path="/hometest"
  element={<HomeTest />}
/>
        {/* VOLUNTEER PAGE */}
        <Route
      path="/volunteer"
      element={<Volunteer />}
       />
       <Route
  path="/gallery"
  element={<Gallery />}
/>

        <Route
  path="/team"
  element={<Team />}
/>


    <Route
          path="/donate"
          element={<Donate />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
        
  path="/faq"
  element={<Faq />}
/>
        <Route
  path="/terms"
  element={<Terms />}
/>
        <Route
  path="/privacy"
  element={<Privacy />}
/>
        <Route
  path="/copyright"
  element={<Copyright />}
/>

<Route
  path="/sitemap"
  element={<Sitemap />}
/>

<Route
  path="/recycle"
  element={<Recycle />}
/>
        
    

      </Routes>

      <FloatingDonateButton />

    </BrowserRouter>
   

  )
}

export default App;