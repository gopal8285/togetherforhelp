import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import logo from "../assets/logo-tfh.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 60);

    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {

      window.removeEventListener("scroll", handleScroll);

    };

  }, []);

  // Simple `overflow: hidden` on the body doesn't reliably block touch
  // scrolling on mobile Safari/Chrome, the page behind the open menu
  // still swipes. Locking the body to `position: fixed` (and restoring
  // the exact scroll position on close) is the technique that actually
  // stops touch scroll on mobile.
  useEffect(() => {

    if (menuOpen) {

      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";

    } else {

      const scrollY = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10) * -1);
      }

    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };

  }, [menuOpen]);

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

    <nav className={scrolled ? "nav-scrolled" : ""}>

      {/* plain <a> (not <Link>) on purpose — logo should always take
          you to the home landing with a full refresh, even if you're
          already on the home page or mid-scroll somewhere on it */}
      <a href="/" className="logo">
        <img src={logo} alt="TogetherForHelp" className="logo-img" />
      </a>

      {/* theme switch + links grouped together on the right so the
          toggle sits right next to "Home" instead of floating in the
          middle of the navbar */}
      <div className="nav-right">

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

        <ul
          className={menuOpen ? "nav-links active" : "nav-links"}
          onClick={() => setMenuOpen(false)}
        >

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
            <Link to="/drives">Drives</Link>
          </li>

          <li>
            <Link to="/recycle">Recycle</Link>
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

      </div>

    </nav>

  )
}

export default Navbar