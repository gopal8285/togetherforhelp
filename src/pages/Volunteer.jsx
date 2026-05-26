import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Volunteer() {

  return (

    <div className="about-page">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="about-hero">

        <h1>Become A Volunteer</h1>

        <p>
          Join TogetherForHelp and become
          part of a movement creating real impact
          in communities across India.
        </p>

      </section>

      {/* VOLUNTEER SECTION */}
      <section className="volunteer-new">

        <div className="volunteer-layout">

          {/* LEFT */}
          <div className="volunteer-left">

            <span className="volunteer-tag">
              Join Our Mission
            </span>

            <h2>
              Together We Can Change Lives
            </h2>

            <p>
              Whether it is food distribution,
              education drives, helping children,
              or community support —
              your contribution matters.
            </p>

            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop"
              alt="Volunteer"
            />

          </div>

          {/* RIGHT FORM */}
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

      {/* FOOTER */}
      <Footer />

    </div>

  )
}

export default Volunteer