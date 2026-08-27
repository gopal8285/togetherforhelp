import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaPeopleGroup, FaPhone } from "react-icons/fa6";

function MobileQuickActionsBar() {

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

    <div
      className={
        visible
          ? "mobile-quick-actions visible"
          : "mobile-quick-actions"
      }
    >

      <Link to="/donate" className="mobile-quick-action">
        <FaHeart />
        <span>Donate</span>
      </Link>

      <Link to="/volunteer" className="mobile-quick-action">
        <FaPeopleGroup />
        <span>Volunteer</span>
      </Link>

      <Link to="/contact" className="mobile-quick-action">
        <FaPhone />
        <span>Contact</span>
      </Link>

    </div>

  );

}

export default MobileQuickActionsBar;
