import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeFaq
from "../components/HomeFaq";


import { motion } from "framer-motion";


function Home() {

  const toggleDrives = () => {

    const section =
      document.getElementById("recent-drives");

    if (section.style.display === "block") {

      section.style.display = "none";

    } else {

      section.style.display = "block";

      section.scrollIntoView({
        behavior: "smooth",
      });

    }

  };

  return (

    <>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="hero" id="home">

        <motion.div

          className="hero-content"

          initial={{
            opacity: 0,
            y: 80
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1
          }}

        >

          <h1>
            Together We Can Change Lives
          </h1>

          <p>
            Helping communities through food drives,
            education, health camps and hope.
          </p>

          {/* HERO BUTTONS */}
          <div className="hero-buttons">

            <button
              className="btn primary"
              onClick={() =>
                document
                  .getElementById('volunteer')
                  .scrollIntoView({
                    behavior: 'smooth'
                  })
              }
            >
              Join Volunteer
            </button>

            <button
              className="btn secondary"
              onClick={() =>
                document
                  .getElementById('impact')
                  .scrollIntoView({
                    behavior: 'smooth'
                  })
              }
            >
              View Our Work
            </button>

            <button
              className="btn secondary"
              onClick={() =>
                document
                  .getElementById('donate')
                  .scrollIntoView({
                    behavior: 'smooth'
                  })
              }
            >
              Donate Now
            </button>

          </div>

        </motion.div>

      </section>

      {/* ABOUT */}
      <section
        className="about-new"
        id="about"
      >

        <div className="about-layout">

          {/* LEFT */}
          <div className="about-left">

            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop"
              alt="Children helping"
            />

            <img
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop"
              alt="Food drive"
            />

          </div>

          {/* RIGHT */}
          <div className="about-right">

            <span className="about-small">
              About Together4Help
            </span>

            <h2>
              Together, We Create Change
            </h2>

            <p>
              Together4Help is a community-driven initiative
              bringing hope, support, and real change
              to underserved communities.
            </p>

            <p>
              From blanket distribution in winter
              to food drives,
              teaching children every Sunday,
              and standing with families during emergencies —
              we believe kindness creates impact.
            </p>

            <button
              className="btn primary"
              onClick={toggleDrives}
            >
              Read More
            </button>

          </div>

        </div>

      </section>

      {/* RECENT DRIVES */}
      <section
        id="recent-drives"
        className="recent-drives"
      >

        <h2>
          Our Recent Community Drives
        </h2>

        <div className="drive-grid">

          {/* CARD 1 */}
          <div className="drive-card">

            <img
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop"
              alt="Winter Drive"
            />

            <h3>
              Winter Blanket Distribution
            </h3>

            <p>
              Helping people survive harsh winters
              by distributing blankets.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="drive-card">

            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop"
              alt="Food Drive"
            />

            <h3>
              Food Distribution Drive
            </h3>

            <p>
              Providing warm meals and food support
              to families facing hardship.
            </p>

          </div>

        </div>

      </section>

      {/* IMPACT */}
      <section
        className="fade-in"
        id="impact"
      >

        <div className="stats">

<div className="stat-box">
  <h3>250+</h3>
  <p>Lives Supported</p>
</div>

<div className="stat-box">
  <h3>20+</h3>
  <p>Community Drives</p>
</div>

<div className="stat-box">
  <h3>500+</h3>
  <p>Meals Distributed</p>
</div>

<div className="stat-box">
  <h3>20+</h3>
  <p>Active Volunteers</p>
</div>

  
 


   


  
  

          

          

        </div>

      </section>

      {/* GALLERY */}
      <section className="fade-in">

        <h2>
          Our Events
        </h2>

        <div className="gallery">

          <div
            className="gallery-item"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542810634-71277d95dcbb')"
            }}
          >
            <div className="overlay">
              Food Distribution | Delhi Slums
            </div>
          </div>

          <div
            className="gallery-item"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c')"
            }}
          >
            <div className="overlay">
              Education Support | Children
            </div>
          </div>

          <div
            className="gallery-item"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497486751825-1233686d5d80')"
            }}
          >
            <div className="overlay">
              Clothes Donation | Smiling Kids
            </div>
          </div>

        </div>

      </section>

      {/* VIDEO */}
      <section
        className="fade-in"
        id="journey-video"
      >

        <h2>
          Our Journey in Action
        </h2>

        <p className="journey-subtext">
          Real moments from our community work.
        </p>

        <div className="video-wrapper">

          <video
            autoPlay
            muted
            loop
            playsInline
          >

            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />

          </video>

        </div>

      </section>

      {/* VOLUNTEER */}
      <section
        className="fade-in volunteer-new"
        id="volunteer"
      >

        <div className="volunteer-layout">

          {/* LEFT */}
          <div className="volunteer-left">

            <span className="volunteer-tag">
              Join Our Volunteer Family
            </span>

            <h2>
              Become A Volunteer
            </h2>

            <p>
              Your effort can bring hope
              to someone who needs it most.
            </p>

            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop"
              alt="Volunteer"
            />

          </div>

          {/* FORM */}
          <div className="volunteer-form-box">

            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfDUMMYFORM/viewform?embedded=true"
              width="100%"
              height="850"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Volunteer Form"
            ></iframe>

          </div>

        </div>

      </section>

      {/* DONATE */}
      <section
        className="fade-in"
        id="donate"
      >

        <h2 className="center">
          Support Our Mission
        </h2>

        <div className="card donate-card">

          <p className="donate-message">
            Every contribution helps us provide
            food, education and care.
          </p>

          <div className="qr-box">

            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=together4help@upi"
              alt="QR Code"
            />

          </div>

          <h3>
            UPI ID: together4help@upi
          </h3>

          <p className="paytm-info">
            📱 Paytm: +91 9876543210
          </p>

        </div>

      </section>
<HomeFaq />
      {/* FOOTER */}
      <Footer />

    </>

  )
}

export default Home