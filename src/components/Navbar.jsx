import { Link } from "react-router-dom";
import { useState , useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

const [darkMode,
setDarkMode]
= useState(

  localStorage.getItem("theme")
  === "dark"

);

useEffect(() => {

  if(darkMode){

    document.body.classList.add(
      "dark-theme"
    );

    localStorage.setItem(
      "theme",
      "dark"
    );

  }

  else{

    document.body.classList.remove(
      "dark-theme"
    );

    localStorage.setItem(
      "theme",
      "light"
    );

  }

}, [darkMode]);

  return (

    <nav>

      <div className="logo">
        TogetherForHelp
      </div>
      <div

  className={
    darkMode
    ? "theme-switch active"
    : "theme-switch"
  }

  onClick={() =>
    setDarkMode(!darkMode)
  }

>

  <div className="switch-circle">

    {
      darkMode
      ? "☀️"
      : "🌙"
    }

  </div>

</div>

      <div
  className="hamburger"
  onClick={() => setMenuOpen(!menuOpen)}
>

  ☰

</div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
         <Link to="/team">Team</Link>
        </li>

        <li>
          <Link to="/volunteer">Volunteer</Link>
        </li>

        <li>
          <Link to="/gallery">Gallery</Link>
        </li>

        <li>
  <Link to="/faq">FAQs</Link>
</li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
       <Link to="/donate">Donate</Link>
         </li>

      </ul>

    </nav>

  )
}

export default Navbar