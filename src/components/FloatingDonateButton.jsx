import { Link, useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";

function FloatingDonateButton() {

  const location = useLocation();

  /* Don't show the floating button on the Donate page itself */
  if (location.pathname.endsWith("/donate")) {
    return null;
  }

  return (

    <Link
      to="/donate"
      className="floating-donate-btn"
      aria-label="Donate Now"
    >

      <FaHeart className="floating-donate-icon" />

      <span>Donate</span>

    </Link>

  );

}

export default FloatingDonateButton;
