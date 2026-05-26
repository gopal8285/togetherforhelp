import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {

  return (

    <div className="about-page">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="about-hero">

        <h1>Contact Us</h1>

        <p>
          Reach out to TogetherForHelp
          for volunteering,
          support,
          partnerships,
          or donations.
        </p>

      </section>

      {/* CONTACT SECTION */}
      <section className="about-story">

        <div className="mission-grid">

          {/* PHONE */}
          <div className="mission-card">

            <h3>Call Us</h3>

            <p>
              📞 +91 9876543210
            </p>

          </div>

          {/* EMAIL */}
          <div className="mission-card">

            <h3>Email</h3>

            <p>
              📧 together4help@gmail.com
            </p>

          </div>

          {/* LOCATION */}
          <div className="mission-card">

            <h3>Location</h3>

            <p>
              📍 Delhi, India
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>

  )
}

export default Contact