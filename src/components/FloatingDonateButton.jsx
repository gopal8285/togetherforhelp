import { useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { useDonateModal } from "../context/useDonateModal";

function FloatingDonateButton() {

  const location = useLocation();
  const { openDonateModal } = useDonateModal();

  /* Don't show the floating button on the Donate page itself */
  if (location.pathname.endsWith("/donate")) {
    return null;
  }

  return (

    <button
      type="button"
      onClick={openDonateModal}
      className="floating-donate-btn"
      aria-label="Donate Now"
    >

      <FaHeart className="floating-donate-icon" />

      <span>Donate</span>

    </button>

  );

}

export default FloatingDonateButton;
