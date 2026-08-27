import { FaWhatsapp } from "react-icons/fa6";

function FloatingWhatsAppButton() {

  return (

    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
    >

      <FaWhatsapp className="floating-whatsapp-icon" />

      <span>Chat</span>

    </a>

  );

}

export default FloatingWhatsAppButton;
