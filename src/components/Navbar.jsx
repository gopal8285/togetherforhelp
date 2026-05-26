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
          <a href="#impact">Impact</a>
        </li>

        <li>
          <a href="#volunteer">Volunteer</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

    </nav>

  )
}

export default Navbar