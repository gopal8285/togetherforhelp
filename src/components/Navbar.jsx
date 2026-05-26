import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav>

      <div className="logo">
        TogetherForHelp
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