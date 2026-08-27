import { useEffect, useState } from "react";

/**
 * StickyCtaBar — a slim bar that slides in from the top once the
 * visitor has scrolled past the hero, keeping the page's main action
 * (Donate Now / Join As Volunteer) reachable without scrolling back up.
 */
function StickyCtaBar({ label, href, external }) {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setVisible(window.scrollY > 380);

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
          ? "sticky-cta-bar visible"
          : "sticky-cta-bar"
      }
    >

      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="sticky-cta-btn"
      >
        {label}
      </a>

    </div>

  );

}

export default StickyCtaBar;
