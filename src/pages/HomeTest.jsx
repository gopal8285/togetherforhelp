

import sun from "../assets/doodles/sun.png";
import { useState, useEffect } from "react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";



const images = [

  "https://images.unsplash.com/photo-1524069290683-0457abfe42c3",

  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",

  "https://images.unsplash.com/photo-1593113598332-cd59a93f7d9e",

  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",

  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6"

];






function HomeTest() {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

  const interval = setInterval(() => {

    setCurrentImage(
      (prev) => (prev + 1) % images.length
    );

  }, 2000);

  return () => clearInterval(interval);

}, []);



  return (

    <section className="modern-hero">

            


    
      {/* LEFT */}

      <div className="hero-left">

         <img
    src={sun}
    alt="Sun Doodle"
    className="hero-sun"
  />

        <span className="hero-tag">
          TogetherForHelp
        </span>

        <h1>
          Together We Can
          Change Lives
        </h1>

        <p>
          Bringing food, education and hope
          to underserved communities through
          volunteer-driven initiatives.
        </p>

        <div className="hero-actions">

          <button className="btn-volunteer">
            Join Volunteer
          </button>

          <button className="btn-work">
            View Our Work
          </button>

          <button className="btn-donate">
            Donate Now
          </button>
<div className="social-section">

  <span>
    Follow us on
  </span>

  <div className="social-icons">

    <a
      href="https://facebook.com"
      target="_blank"
      rel="noreferrer"
    >
      <FaFacebookF />
    </a>

    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedinIn />
    </a>

    <a
      href="https://instagram.com"
      target="_blank"
      rel="noreferrer"
    >
      <FaInstagram />
    </a>

    <a
      href="https://twitter.com"
      target="_blank"
      rel="noreferrer"
    >
      <FaTwitter />
    </a>

  </div>

</div>
         

        </div>

      </div>

      {/* RIGHT */}

     <div className="hero-right">

  <div className="image-frame">

   <img
  src={images[currentImage]}
  alt="NGO Work"
  onError={(e) => {
    e.target.src =
      "https://images.unsplash.com/photo-1524069290683-0457abfe42c3";
  }}
/>
  </div>

</div>

    </section>

  )

}

export default HomeTest;