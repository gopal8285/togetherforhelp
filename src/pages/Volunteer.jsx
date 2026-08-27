import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import waysToHelpTeamImg from "../assets/ways-to-help-team.jpeg";
import VolunteerPerks from "../components/VolunteerPerks";
import StickyCtaBar from "../components/StickyCtaBar";

function Volunteer() {

  return (

    <div className="about-page">

      {/* NAVBAR */}
      <Navbar />

      <StickyCtaBar
        label="Join As Volunteer"
        href="https://wa.me/919876543210"
        external
      />

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
              src={waysToHelpTeamImg}
              alt="TogetherForHelp volunteer team standing together"
              loading="lazy"
            />

          </div>

          {/* RIGHT FORM */}
          <div className="volunteer-form-box">

            <div className="volunteer-form-fallback">

              <h3>
                Ready To Join Us?
              </h3>

              <p>
                Our online volunteer form is being set up.
                In the meantime, reach out directly and
                we'll get you started right away.
              </p>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                Message Us On WhatsApp
              </a>

              <a
                href="mailto:hello@togetherforhelp.org"
                className="volunteer-form-email"
              >
                hello@togetherforhelp.org
              </a>

            </div>

          </div>

        </div>

        {/* WHY VOLUNTEER — PERKS */}
        <div className="perks-wrap">

          <span className="perks-tag">
            Why Volunteer With Us
          </span>

          <h3 className="perks-heading">
            More Than Just Giving Back
          </h3>

          <VolunteerPerks />

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>

  )
}

export default Volunteer