import { Link } from "react-router-dom";

function Footer() {

  return (

    <footer className="premium-footer">

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-brand">

          <span className="footer-tag">
            TogetherForHelp
          </span>

          <h2>
            Humanity grows
            when kindness spreads.
          </h2>

          <p>
            Supporting communities through
            food drives,
            education,
            emergency relief,
            and collective care.
          </p>

        </div>

        {/* CENTER */}

        <div className="footer-links">

          <h3>Navigation</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/team">Team</Link>

          <Link to="/gallery">Gallery</Link>

          <Link to="/faq">FAQs</Link>

          <Link to="/contact">Contact</Link>

        </div>

        {/* RIGHT */}

        <div className="footer-social">

          <h3>Connect</h3>

          <a href="#">
            Instagram
          </a>

          <a href="#">
            LinkedIn
          </a>

          <a href="#">
            Twitter / X
          </a>

          <a href="#">
            Facebook
          </a>

          <a href="#">
            hello@togetherforhelp.org
          </a>

        </div>

      </div>

      
      {/* LEGAL */}

<div className="footer-legal">

  <h3>Useful Links</h3>

  <Link to="/faq">
    FAQs
  </Link>

  <Link to="/sitemap">
    Sitemap
  </Link>

  <Link to="/privacy-policy">
    Privacy Policy
  </Link>

  <Link to="/terms">
    Terms of Use
  </Link>

  <Link to="/copyright">
    Copyright Policy
  </Link>

</div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 TogetherForHelp.
          Built with compassion & purpose.
        </p>

      </div>

    </footer>

  )
}

export default Footer