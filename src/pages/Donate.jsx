import '../styles/style.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Donate() {

  return (

    <div className="about-page">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="about-hero">

        <h1>Support Our Mission</h1>

        <p>
          Every contribution helps us provide
          food,
          education,
          care,
          and hope to communities in need.
        </p>

      </section>

      {/* DONATION SECTION */}
      <section id="donate">

        <div className="card donate-card">

          <p className="donate-message">

            Your support helps TogetherForHelp
            continue impactful community drives
            and humanitarian work.

          </p>

          {/* QR CODE */}
          <div className="qr-box">

            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=together4help@upi"
              alt="Donation QR"
            />

          </div>

          {/* PAYMENT INFO */}
          <h3>
            UPI ID: together4help@upi
          </h3>

          <p className="paytm-info">
            📱 Paytm: +91 9876543210
          </p>

          <p className="donate-note">

            Every small contribution creates
            meaningful impact.

          </p>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>

  )
}

export default Donate