import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

function BackToTopButton() {

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

  const scrollToTop = () => {

    window.scrollTo({ top: 0, behavior: "smooth" });

  };

  return (

    <button
      type="button"
      className={
        visible
          ? "back-to-top-btn visible"
          : "back-to-top-btn"
      }
      onClick={scrollToTop}
      aria-label="Back to top"
    >

      <FaArrowUp />

    </button>

  );

}

export default BackToTopButton;
