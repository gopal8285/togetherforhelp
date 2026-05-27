import { Link } from "react-router-dom";

function Footer() {

  return (

    <footer>

      <div className="footer-grid">

        {/* LEFT */}
        <div>

          <h3>TogetherForHelp</h3>

          <p>
            Creating positive community impact
            through compassion,
            support,
            and action.
          </p>

        </div>

        {/* CENTER */}
        <div>

          <h3>Quick Links</h3>

          <p><Link to="/">Home</Link></p>

          <p><Link to="/about">About</Link></p>

          <p><Link to="/volunteer">Volunteer</Link></p>

          <p><Link to="/gallery">Gallery</Link></p>

          <p><Link to="/team">Team</Link></p>

          <p><Link to="/donate">Donate</Link></p>

          <p><Link to="/contact">Contact</Link></p>

        </div>

        {/* RIGHT */}
        <div>

          <h3>Legal</h3>
          <p>
  <Link to="/sitemap">
    Site Map
  </Link>
</p>

          <p><Link to="/faq">FAQs</Link></p>

          <p><Link to="/terms">Terms of Use</Link></p>

          <p><Link to="/privacy">Privacy Policy</Link></p>

          <p>
            <Link to="/copyright">
              Copyright Policy
            </Link>
          </p>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 TogetherForHelp.
          All Rights Reserved.
        </p>

      </div>

    </footer>

  )
}

export default Footer