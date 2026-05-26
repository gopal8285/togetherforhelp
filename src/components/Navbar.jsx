import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav>

      <div className="logo">
        TogetherForHelp
      </div>

      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/impact">Impact</Link>
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

      </ul>

    </nav>

  )
}

export default Navbar