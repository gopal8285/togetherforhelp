// import { Link } from "react-router-dom";

// import {
//   FaInstagram,
//   FaLinkedin,
//   FaFacebookF,
//   FaXTwitter
// } from "react-icons/fa6";

// function Footer() {

//   return (

//     <footer className="premium-footer">

//       <div className="footer-container">

//         {/* LEFT */}

//         <div className="footer-brand">

//           <span className="footer-tag">
//             TogetherForHelp
//           </span>

//           <h2>
//             Humanity grows
//             when kindness spreads.
//           </h2>

//           <p>
//             Supporting communities through
//             food drives,
//             education,
//             emergency relief,
//             and collective care.
//           </p>

//         </div>

//         {/* NAVIGATION */}

//         <div className="footer-links">

//           <h3>Navigation</h3>

//           <Link to="/">Home</Link>

//           <Link to="/about">About</Link>

//           <Link to="/team">Team</Link>

//           <Link to="/gallery">Gallery</Link>

//           <Link to="/faq">FAQs</Link>

//           <Link to="/contact">Contact</Link>

//         </div>

//         {/* SOCIAL */}

//         <div className="footer-social">

//           <h3>Connect</h3>

//           <div className="footer-icons">

//             <a href="#">
//               <FaInstagram />
//             </a>

//             <a href="#">
//               <FaLinkedin />
//             </a>

//             <a href="#">
//               <FaXTwitter />
//             </a>

//             <a href="#">
//               <FaFacebookF />
//             </a>

//           </div>

//           <a href="#">
//             hello@togetherforhelp.org
//           </a>

//         </div>

//         {/* LEGAL */}

//         <div className="footer-legal">

//           <h3>Useful Links</h3>

//           <Link to="/faq">
//             FAQs
//           </Link>

//           <Link to="/sitemap">
//             Sitemap
//           </Link>

//           <Link to="/privacy-policy">
//             Privacy Policy
//           </Link>

//           <Link to="/terms">
//             Terms of Use
//           </Link>

//           <Link to="/copyright">
//             Copyright Policy
//           </Link>

//         </div>

//       </div>

//       {/* BOTTOM */}

//       <div className="footer-bottom">

//         <p>
//           © 2026 TogetherForHelp.
//           Built with compassion & purpose.
//         </p>

//       </div>

//     </footer>

//   )

// }

// export default Footer;



import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaYoutube,
  FaShieldHalved,
  FaScaleBalanced,
  FaHandshakeAngle
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-container">

        {/* BRAND — full width top */}
        <div className="footer-brand">
          <span className="footer-tag">TOGETHERFORHELP</span>
          <h2>Humanity grows when kindness spreads.</h2>
          <p>Supporting communities through food drives, education, emergency relief, and collective care.</p>

          {/* Social icons seedha brand ke neeche */}
          <div className="footer-icons">
            <a href="https://www.instagram.com/_togetherforhelp_?igsi=MXNreDF2Y3lvb2RjaA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/togetherforhelp/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.youtube.com/@Togetherforhelp" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://www.facebook.com/share/1DWdRFqPWU/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          </div>
          <a href="mailto:Togetherforhelp01@gmail.com" className="footer-email">
            Togetherforhelp01@gmail.com
          </a>
        </div>

        {/* LINKS ROW */}
        <div className="footer-links-row">

          <div className="footer-col">
            <h3>Navigation</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/team">Team</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/faq">FAQs</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h3>Useful Links</h3>
            <Link to="/faq">FAQs</Link>
            <Link to="/sitemap">Sitemap</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/copyright">Copyright Policy</Link>
          </div>

        </div>

      </div>

      {/* TRUST & CREDIBILITY BADGES */}
      <div className="footer-trust">
        <div className="footer-trust-item">
          <FaShieldHalved />
          <span>12A & 80G Certified</span>
        </div>
        <div className="footer-trust-item">
          <FaScaleBalanced />
          <span>Registered Under The Indian Trusts Act, 1882</span>
        </div>
        <div className="footer-trust-item">
          <FaHandshakeAngle />
          <span>Affiliated With Niti Aayog Through NGO Darpan</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TogetherForHelp. Built with compassion & purpose.</p>
        <p className="footer-credit">
          Website designed &amp; built by{" "}
          <a
            href="https://www.linkedin.com/in/gopal-kumar-9a89a7392/"
            target="_blank"
            rel="noreferrer"
          >
            Gopal Kumar
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
