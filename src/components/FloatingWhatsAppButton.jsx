import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

function FloatingWhatsAppButton() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setVisible(window.scrollY > 400);

    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {

      window.removeEventListener("scroll", handleScroll);

    };

  }, []);

  return (

    <a
      href="https://wa.me/919810811439"
      target="_blank"
      rel="noreferrer"
      className={
        visible
          ? "floating-whatsapp-btn visible"
          : "floating-whatsapp-btn"
      }
      aria-label="Chat with us on WhatsApp"
    >

      <FaWhatsapp className="floating-whatsapp-icon" />

      <span>Chat</span>

    </a>

  );

}

export default FloatingWhatsAppButton;
